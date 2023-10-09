import { Body, Controller, Get, Post } from '@nestjs/common';
import { MedicService } from './medic.service';
import { CreateMedicInput } from './dto/create-medic.input';

@Controller('medic')
export class MedicController {

    constructor(private readonly medicService: MedicService) { }

    @Post()
    addMedic(@Body('title') title: string) {
        const generatedId = this.medicService.create({ "title": title });
        return { id: generatedId };
    }

    @Get()
    getAllMedics() {
        return this.medicService.findAll();
    }

}

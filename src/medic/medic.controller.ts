import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { MedicService } from './medic.service';
import { CreateMedicInput } from './dto/create-medic.input';
import { CreatePersonInput } from 'src/person/dto/create-person.input';
import { CreateAddressInput } from 'src/address/dto/create-address.input';

@Controller('medic')
export class MedicController {

    constructor(private readonly medicService: MedicService) { }

    @Post()
    async addMedic(@Body() createMedicInput: CreateMedicInput,
        @Body() createPersonInput: CreatePersonInput,
        @Body() createAddressInput: CreateAddressInput) {
        const generatedId = await this.medicService.create(createAddressInput,
            createPersonInput, createMedicInput);
        return { id: generatedId };
    }

    @Get()
    getAllMedics() {
        return this.medicService.findAll();
    }

    @Get(':id')
    getMedic(@Param('id', new ParseIntPipe()) id: number) {
        return this.medicService.findOne(id);
    }
}

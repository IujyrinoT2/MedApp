import { Injectable } from '@nestjs/common';
import { CreateMedicInput } from './dto/create-medic.input';
import { UpdateMedicInput } from './dto/update-medic.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MedicService {

    constructor(private prisma: PrismaService) { }

    async create(createMedicInput: CreateMedicInput) {
        return await this.prisma.medic.create({
            data: { title: createMedicInput.title },
        });
    }

    findAll() {
        return this.prisma.medic.findMany();
    }

    findOne(id: number) {
        return this.prisma.medic.findUnique({ where: { id } });
    }

    update(id: number, updateMedicInput: UpdateMedicInput) {
        return this.prisma.medic.update({
            where: { id },
            data: { title: updateMedicInput.title },
        });
    }

    remove(id: number) {
        return this.prisma.medic.delete({ where: { id } })
    }
}

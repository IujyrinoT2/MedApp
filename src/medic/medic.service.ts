import { Injectable } from '@nestjs/common';
import { CreateMedicInput } from './dto/create-medic.input';
import { UpdateMedicInput } from './dto/update-medic.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePersonInput } from 'src/person/dto/create-person.input';
import { CreateAddressInput } from 'src/address/dto/create-address.input';

@Injectable()
export class MedicService {

    constructor(private prisma: PrismaService) { }

    async create(
        createAddressInput: CreateAddressInput,
        createPersonInput: CreatePersonInput,
        createMedicInput: CreateMedicInput
    ) {
        return await this.prisma.medic.create({
            data:
                { ...createAddressInput, ...createMedicInput, ...createPersonInput, },
        });
    }

    findAll() {
        return this.prisma.medic.findMany({
            include: {
                inheritedPerson: {
                    include: {
                        address: true
                    }
                }
            }
        });
    }

    findOne(id: number) {
        return this.prisma.medic.findUnique({
            include: {
                inheritedPerson: {
                    include: {
                        address: true
                    }
                }
            },
            where: { id }
        });
    }

    update(id: number, updateMedicInput: UpdateMedicInput) {
        return this.prisma.medic.update({
            where: { id },
            data: { ...updateMedicInput }
        });
    }

    remove(id: number) {
        return this.prisma.medic.delete({ where: { id } })
    }
}

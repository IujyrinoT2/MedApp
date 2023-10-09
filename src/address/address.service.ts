import { Injectable } from '@nestjs/common';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AddressService {

    constructor(private prisma: PrismaService) { }

    async create(createAddressInput: CreateAddressInput) {
        return await this.prisma.address.create({
            data: { ...createAddressInput }
        });
    }

    findAll() {
        return this.prisma.address.findMany();
    }

    findOne(id: number) {
        return this.prisma.address.findUnique({ where: { id } });
    }

    update(id: number, updateAddressInput: UpdateAddressInput) {
        return this.prisma.address.update({
            where: { id },
            data: { ...updateAddressInput }
        });
    }

    remove(id: number) {
        return this.prisma.address.delete({ where: { id } });
    }
}

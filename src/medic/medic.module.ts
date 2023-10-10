import { Module } from '@nestjs/common';
import { MedicService } from './medic.service';
import { MedicResolver } from './medic.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { MedicController } from './medic.controller';
import { PersonModule } from 'src/person/person.module';

@Module({
    imports: [PersonModule],
    providers: [MedicResolver, MedicService, PrismaService],
    controllers: [MedicController],
})
export class MedicModule { }

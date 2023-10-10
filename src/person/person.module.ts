import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonResolver } from './person.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    providers: [PersonResolver, PersonService, PrismaService],
})
export class PersonModule { }

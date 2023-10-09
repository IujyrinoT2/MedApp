import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MedicModule } from './medic/medic.module';
import { PrismaService } from './prisma/prisma.service';
import { AddressModule } from './address/address.module';

@Module({
    imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        sortSchema: true,
    }), PersonModule, MedicModule, AddressModule],

    controllers: [AppController],

    providers: [AppService, PrismaService],
})
export class AppModule { }

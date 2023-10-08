import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './person.model';

@Controller('person')
export class PersonController {

    constructor(private readonly personService: PersonService) { }

    @Post()
    addPerson(@Body() fullBody: {

        first_name: string, last_name: string,
        email: string, address_id: number

    }): { id: number } {

        const generatedID = this.personService.addPerson(fullBody.first_name, fullBody.last_name,
            fullBody.email, fullBody.address_id);

        return { id: generatedID };
    }

    @Get()
    getAllPeople(): Person[] {

        return this.personService.getAllPeople();
    }

    @Get(':id')
    getPerson(@Param('id', new ParseIntPipe()) id: number): Person {

        return this.personService.getPerson(id);
    }

    @Patch(':id')
    updatePerson(@Param('id', new ParseIntPipe()) id: number,
        @Body('first_name') first_name: string,
        @Body('last_name') last_name: string,
        @Body('email') email: string,
        @Body('address_id') address_id: number): void {

        this.personService.updatePerson(id, first_name, last_name, email, address_id);
    }

    @Delete(':id')
    deletePerson(@Param('id', new ParseIntPipe()) id: number): void {

        this.personService.deletePerson(id);
    }
}

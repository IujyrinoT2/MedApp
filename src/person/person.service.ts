import { Injectable, NotFoundException } from '@nestjs/common';
import { Person } from './person.model'
import { randomInt } from 'crypto';

@Injectable()
export class PersonService {

    private people: Person[] = [];

    addPerson(first_name: string, last_name: string,
        email: string, address_id: number) {

        const id: number = randomInt(999999);
        const newPerson = new Person(id, first_name, last_name,
            email, address_id);

        this.people.push(newPerson);
        return id;
    }

    getAllPeople(): Person[] {

        return this.people;
    }

    getPerson(id: number): Person {

        const person: Person = this.findPerson(id);
        return person;
    }

    updatePerson(id: number, first_name: string, last_name: string, email: string,
        address_id: number): void {

        const person: Person = this.findPerson(id);
        const updatedPerson: Person = person; // referrences person object

        updatedPerson.first_name = first_name ?? updatedPerson.first_name;
        updatedPerson.last_name = last_name ?? updatedPerson.last_name;
        updatedPerson.email = email ?? updatedPerson.email;
        updatedPerson.address_id = address_id ?? updatedPerson.address_id;
    }

    deletePerson(id: number): void {

        const person: Person = this.findPerson(id);
        this.people.splice(person.id, 1);
    }


    private findPerson(reqId: number): Person {

        const personIndex: number = this.people.findIndex(pers => pers.id === reqId);
        const person: Person = this.people[personIndex];
        if (!person) {
            throw new NotFoundException(`Person with id: ${reqId} not found`);
        }
        return person;
    }
}

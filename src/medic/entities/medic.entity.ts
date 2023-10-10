import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Person } from 'src/person/entities/person.entity';

@ObjectType()
export class Medic {
    @Field(() => Int)
    id: number;

    @Field()
    title: string;

    @Field(() => Person)
    inheritedPerson: Person;

    @Field(() => Int)
    personId: number;
}

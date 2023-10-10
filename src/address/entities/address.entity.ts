import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Person } from 'src/person/entities/person.entity';

@ObjectType()
export class Address {

    @Field(() => Int)
    id: number;

    @Field()
    country: string;

    @Field()
    city: string;

    @Field()
    street: string;

    @Field({ nullable: true })
    suite?: string;

    @Field(() => Int, { nullable: true })
    floor?: number;

    @Field(() => Int, { nullable: true })
    appartment?: number;

    @Field(() => Person, { nullable: true })
    person?: Person;
}

import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Address } from 'src/address/entities/address.entity';
import { Medic } from 'src/medic/entities/medic.entity';

@ObjectType()
export class Person {

    @Field(() => Int)
    id: number;

    @Field()
    first_name: string;

    @Field()
    last_name: string;

    @Field()
    email: string;

    @Field(() => Address)
    address: Address;

    @Field()
    address_id: string;

    @Field(() => Medic, { nullable: true })
    medic?: Medic;
}

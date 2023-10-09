import { ObjectType, Field, Int } from '@nestjs/graphql';

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
}

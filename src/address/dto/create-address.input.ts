import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAddressInput {

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

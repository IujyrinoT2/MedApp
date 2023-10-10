import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePersonInput {

    @Field()
    first_name: string;

    @Field()
    last_name: string;

    @Field()
    email: string;

    @Field(() => Int)
    address_id: number;
}

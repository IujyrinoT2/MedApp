import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMedicInput {
    @Field()
    title: string;
}

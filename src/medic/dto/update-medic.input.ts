import { CreateMedicInput } from './create-medic.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMedicInput extends PartialType(CreateMedicInput) {
    @Field(() => Int)
    id: number;

    @Field()
    title: string;
}

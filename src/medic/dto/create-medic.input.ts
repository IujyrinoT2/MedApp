import { InputType, Int, Field } from '@nestjs/graphql';
import { Person } from 'src/person/entities/person.entity';

@InputType()
export class CreateMedicInput {
    @Field()
    title: string;

    @Field(() => Int)
    personId: number;
}

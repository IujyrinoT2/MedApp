import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Medic {
    @Field(() => Int)
    id: number;

    @Field()
    title: string;
}

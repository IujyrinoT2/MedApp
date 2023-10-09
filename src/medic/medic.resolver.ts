import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MedicService } from './medic.service';
import { Medic } from './entities/medic.entity';
import { CreateMedicInput } from './dto/create-medic.input';
import { UpdateMedicInput } from './dto/update-medic.input';

@Resolver(() => Medic)
export class MedicResolver {
    constructor(private readonly medicService: MedicService) { }

    @Mutation(() => Medic)
    createMedic(@Args('createMedicInput') createMedicInput: CreateMedicInput) {
        return this.medicService.create(createMedicInput);
    }

    @Query(() => [Medic], { name: 'medics' })
    findAll() {
        return this.medicService.findAll();
    }

    @Query(() => Medic, { name: 'medic' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.medicService.findOne(id);
    }

    @Mutation(() => Medic)
    updateMedic(@Args('updateMedicInput') updateMedicInput: UpdateMedicInput) {
        return this.medicService.update(updateMedicInput.id, updateMedicInput);
    }

    @Mutation(() => Medic)
    removeMedic(@Args('id', { type: () => Int }) id: number) {
        return this.medicService.remove(id);
    }
}

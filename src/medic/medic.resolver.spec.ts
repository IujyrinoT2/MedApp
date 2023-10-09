import { Test, TestingModule } from '@nestjs/testing';
import { MedicResolver } from './medic.resolver';
import { MedicService } from './medic.service';

describe('MedicResolver', () => {
  let resolver: MedicResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicResolver, MedicService],
    }).compile();

    resolver = module.get<MedicResolver>(MedicResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

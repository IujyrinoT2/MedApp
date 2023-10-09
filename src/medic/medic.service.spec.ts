import { Test, TestingModule } from '@nestjs/testing';
import { MedicService } from './medic.service';

describe('MedicService', () => {
  let service: MedicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicService],
    }).compile();

    service = module.get<MedicService>(MedicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

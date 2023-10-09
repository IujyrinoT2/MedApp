import { Test, TestingModule } from '@nestjs/testing';
import { MedicController } from './medic.controller';

describe('MedicController', () => {
  let controller: MedicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicController],
    }).compile();

    controller = module.get<MedicController>(MedicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

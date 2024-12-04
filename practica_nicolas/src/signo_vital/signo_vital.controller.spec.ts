import { Test, TestingModule } from '@nestjs/testing';
import { SignoVitalController } from './signo_vital.controller';
import { SignoVitalService } from './signo_vital.service';

describe('SignoVitalController', () => {
  let controller: SignoVitalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignoVitalController],
      providers: [SignoVitalService],
    }).compile();

    controller = module.get<SignoVitalController>(SignoVitalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

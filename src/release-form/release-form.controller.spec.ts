import { Test, TestingModule } from '@nestjs/testing';
import { ReleaseFormController } from './release-form.controller';
import { ReleaseFormService } from './release-form.service';

describe('ReleaseFormController', () => {
  let controller: ReleaseFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReleaseFormController],
      providers: [ReleaseFormService],
    }).compile();

    controller = module.get<ReleaseFormController>(ReleaseFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

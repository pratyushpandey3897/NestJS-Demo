import { Test, TestingModule } from '@nestjs/testing';
import { ReleaseFormService } from './release-form.service';

describe('ReleaseFormService', () => {
  let service: ReleaseFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReleaseFormService],
    }).compile();

    service = module.get<ReleaseFormService>(ReleaseFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

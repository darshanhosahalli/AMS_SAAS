import { Test, TestingModule } from '@nestjs/testing';
import { CrudfactoryService } from './crudfactory.service';

describe('CrudfactoryService', () => {
  let service: CrudfactoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudfactoryService],
    }).compile();

    service = module.get<CrudfactoryService>(CrudfactoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

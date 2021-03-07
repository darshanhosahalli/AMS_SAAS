import { Test, TestingModule } from '@nestjs/testing';
import { QueryprocessorService } from './queryprocessor.service';
import { BaseEntity } from 'typeorm';

describe('QueryprocessorService', () => {
  let service: QueryprocessorService<BaseEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueryprocessorService],
    }).compile();

    service = module.get<QueryprocessorService<BaseEntity>>(QueryprocessorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

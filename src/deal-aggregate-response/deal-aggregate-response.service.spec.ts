import { Test, TestingModule } from '@nestjs/testing';
import { DealAggregateResponseService } from './deal-aggregate-response.service';

describe('DealAggregateResponseService', () => {
  let service: DealAggregateResponseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DealAggregateResponseService],
    }).compile();

    service = module.get<DealAggregateResponseService>(DealAggregateResponseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

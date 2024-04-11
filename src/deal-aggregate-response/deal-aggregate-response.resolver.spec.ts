import { Test, TestingModule } from '@nestjs/testing';
import { DealAggregateResponseResolver } from './deal-aggregate-response.resolver';
import { DealAggregateResponseService } from './deal-aggregate-response.service';

describe('DealAggregateResponseResolver', () => {
  let resolver: DealAggregateResponseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DealAggregateResponseResolver, DealAggregateResponseService],
    }).compile();

    resolver = module.get<DealAggregateResponseResolver>(DealAggregateResponseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { DealStageConnectionResolver } from './deal-stage-connection.resolver';
import { DealStageConnectionService } from './deal-stage-connection.service';

describe('DealStageConnectionResolver', () => {
  let resolver: DealStageConnectionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DealStageConnectionResolver, DealStageConnectionService],
    }).compile();

    resolver = module.get<DealStageConnectionResolver>(DealStageConnectionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { DealStageResolver } from './deal-stage.resolver';
import { DealStageService } from './deal-stage.service';

describe('DealStageResolver', () => {
  let resolver: DealStageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DealStageResolver, DealStageService],
    }).compile();

    resolver = module.get<DealStageResolver>(DealStageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

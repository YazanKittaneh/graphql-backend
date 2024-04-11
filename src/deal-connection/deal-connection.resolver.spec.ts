import { Test, TestingModule } from '@nestjs/testing';
import { DealConnectionResolver } from './deal-connection.resolver';
import { DealConnectionService } from './deal-connection.service';

describe('DealConnectionResolver', () => {
  let resolver: DealConnectionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DealConnectionResolver, DealConnectionService],
    }).compile();

    resolver = module.get<DealConnectionResolver>(DealConnectionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

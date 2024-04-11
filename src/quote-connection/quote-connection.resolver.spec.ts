import { Test, TestingModule } from '@nestjs/testing';
import { QuoteConnectionResolver } from './quote-connection.resolver';
import { QuoteConnectionService } from './quote-connection.service';

describe('QuoteConnectionResolver', () => {
  let resolver: QuoteConnectionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuoteConnectionResolver, QuoteConnectionService],
    }).compile();

    resolver = module.get<QuoteConnectionResolver>(QuoteConnectionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

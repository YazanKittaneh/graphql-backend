import { Test, TestingModule } from '@nestjs/testing';
import { QuoteConnectionService } from './quote-connection.service';

describe('QuoteConnectionService', () => {
  let service: QuoteConnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuoteConnectionService],
    }).compile();

    service = module.get<QuoteConnectionService>(QuoteConnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

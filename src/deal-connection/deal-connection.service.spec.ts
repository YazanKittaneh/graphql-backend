import { Test, TestingModule } from '@nestjs/testing';
import { DealConnectionService } from './deal-connection.service';

describe('DealConnectionService', () => {
  let service: DealConnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DealConnectionService],
    }).compile();

    service = module.get<DealConnectionService>(DealConnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

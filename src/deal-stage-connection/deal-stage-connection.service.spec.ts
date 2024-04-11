import { Test, TestingModule } from '@nestjs/testing';
import { DealStageConnectionService } from './deal-stage-connection.service';

describe('DealStageConnectionService', () => {
  let service: DealStageConnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DealStageConnectionService],
    }).compile();

    service = module.get<DealStageConnectionService>(DealStageConnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AuditConnectionService } from './audit-connection.service';

describe('AuditConnectionService', () => {
  let service: AuditConnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuditConnectionService],
    }).compile();

    service = module.get<AuditConnectionService>(AuditConnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

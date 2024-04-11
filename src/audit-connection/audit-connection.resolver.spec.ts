import { Test, TestingModule } from '@nestjs/testing';
import { AuditConnectionResolver } from './audit-connection.resolver';
import { AuditConnectionService } from './audit-connection.service';

describe('AuditConnectionResolver', () => {
  let resolver: AuditConnectionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuditConnectionResolver, AuditConnectionService],
    }).compile();

    resolver = module.get<AuditConnectionResolver>(AuditConnectionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

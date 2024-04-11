import { Module } from '@nestjs/common';
import { AuditConnectionService } from './audit-connection.service';
import { AuditConnectionResolver } from './audit-connection.resolver';

@Module({
  providers: [AuditConnectionResolver, AuditConnectionService],
})
export class AuditConnectionModule {}

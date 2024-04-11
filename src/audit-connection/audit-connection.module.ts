import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditConnectionService } from './audit-connection.service';
import { AuditConnectionResolver } from './audit-connection.resolver';
import { AuditConnection } from './entities/audit-connection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuditConnection])],
  providers: [AuditConnectionResolver, AuditConnectionService]
})
export class AuditConnectionModule {}

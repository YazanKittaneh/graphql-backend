import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditService } from './audit.service';
import { AuditResolver } from './audit.resolver';
import { Audit } from './entities/audit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Audit])],
  providers: [AuditResolver, AuditService]
})
export class AuditModule {}

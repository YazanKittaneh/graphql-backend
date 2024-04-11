import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DealConnectionService } from './deal-connection.service';
import { DealConnectionResolver } from './deal-connection.resolver';
import { DealConnection } from './entities/deal-connection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DealConnection])],
  providers: [DealConnectionResolver, DealConnectionService],
})
export class DealConnectionModule {}

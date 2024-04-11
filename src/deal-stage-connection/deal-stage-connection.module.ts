import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DealStageConnectionService } from './deal-stage-connection.service';
import { DealStageConnectionResolver } from './deal-stage-connection.resolver';
import { DealStageConnection } from './entities/deal-stage-connection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DealStageConnection])],
  providers: [DealStageConnectionResolver, DealStageConnectionService],
})
export class DealStageConnectionModule {}

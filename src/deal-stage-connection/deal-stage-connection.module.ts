import { Module } from '@nestjs/common';
import { DealStageConnectionService } from './deal-stage-connection.service';
import { DealStageConnectionResolver } from './deal-stage-connection.resolver';

@Module({
  providers: [DealStageConnectionResolver, DealStageConnectionService],
})
export class DealStageConnectionModule {}

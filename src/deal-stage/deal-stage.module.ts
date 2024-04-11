import { Module } from '@nestjs/common';
import { DealStageService } from './deal-stage.service';
import { DealStageResolver } from './deal-stage.resolver';

@Module({
  providers: [DealStageResolver, DealStageService],
})
export class DealStageModule {}

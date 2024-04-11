import { Module } from '@nestjs/common';
import { DealAggregateResponseService } from './deal-aggregate-response.service';
import { DealAggregateResponseResolver } from './deal-aggregate-response.resolver';

@Module({
  providers: [DealAggregateResponseResolver, DealAggregateResponseService],
})
export class DealAggregateResponseModule {}

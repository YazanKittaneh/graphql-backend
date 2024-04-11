import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DealAggregateResponseService } from './deal-aggregate-response.service';
import { DealAggregateResponseResolver } from './deal-aggregate-response.resolver';
import { DealAggregateResponse } from './entities/deal-aggregate-response.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DealAggregateResponse])],
  providers: [DealAggregateResponseResolver, DealAggregateResponseService],
})
export class DealAggregateResponseModule {}

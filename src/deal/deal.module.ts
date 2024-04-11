import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DealService } from './deal.service';
import { DealResolver } from './deal.resolver';
import { Deal } from './entities/deal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deal])],
  providers: [DealResolver, DealService]
})
export class DealModule {}

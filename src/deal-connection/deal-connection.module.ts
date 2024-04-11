import { Module } from '@nestjs/common';
import { DealConnectionService } from './deal-connection.service';
import { DealConnectionResolver } from './deal-connection.resolver';

@Module({
  providers: [DealConnectionResolver, DealConnectionService],
})
export class DealConnectionModule {}

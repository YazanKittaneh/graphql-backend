import { Module } from '@nestjs/common';
import { QuoteConnectionService } from './quote-connection.service';
import { QuoteConnectionResolver } from './quote-connection.resolver';

@Module({
  providers: [QuoteConnectionResolver, QuoteConnectionService],
})
export class QuoteConnectionModule {}

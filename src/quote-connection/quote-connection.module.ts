import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuoteConnectionService } from './quote-connection.service';
import { QuoteConnectionResolver } from './quote-connection.resolver';
import { QuoteConnection } from './entities/quote-connection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuoteConnection])],
  providers: [QuoteConnectionResolver, QuoteConnectionService]
})
export class QuoteConnectionModule {}

import { Module } from '@nestjs/common';
import { CompanyNoteConnectionService } from './company-note-connection.service';
import { CompanyNoteConnectionResolver } from './company-note-connection.resolver';

@Module({
  providers: [CompanyNoteConnectionResolver, CompanyNoteConnectionService],
})
export class CompanyNoteConnectionModule {}

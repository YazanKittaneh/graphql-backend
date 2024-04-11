import { Module } from '@nestjs/common';
import { CompanyNoteService } from './company-note.service';
import { CompanyNoteResolver } from './company-note.resolver';

@Module({
  providers: [CompanyNoteResolver, CompanyNoteService],
})
export class CompanyNoteModule {}

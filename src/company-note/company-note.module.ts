import { Module } from '@nestjs/common';
import { CompanyNoteService } from './company-note.service';
import { CompanyNoteResolver } from './company-note.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyNote } from './entities/company-note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyNote])],
  providers: [CompanyNoteResolver, CompanyNoteService],
})
export class CompanyNoteModule {}

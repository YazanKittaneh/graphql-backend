import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyNoteConnectionService } from './company-note-connection.service';
import { CompanyNoteConnectionResolver } from './company-note-connection.resolver';
import { CompanyNoteConnection } from './entities/company-note-connection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyNoteConnection])],
  providers: [CompanyNoteConnectionResolver, CompanyNoteConnectionService],
})
export class CompanyNoteConnectionModule {}

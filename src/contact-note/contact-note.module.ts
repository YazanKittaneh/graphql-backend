import { Module } from '@nestjs/common';
import { ContactNoteService } from './contact-note.service';
import { ContactNoteResolver } from './contact-note.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactNote } from './entities/contact-note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactNote])],
  providers: [ContactNoteResolver, ContactNoteService],
})
export class ContactNoteModule {}

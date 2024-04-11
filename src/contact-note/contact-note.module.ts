import { Module } from '@nestjs/common';
import { ContactNoteService } from './contact-note.service';
import { ContactNoteResolver } from './contact-note.resolver';

@Module({
  providers: [ContactNoteResolver, ContactNoteService],
})
export class ContactNoteModule {}

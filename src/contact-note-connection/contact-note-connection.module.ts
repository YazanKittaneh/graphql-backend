import { Module } from '@nestjs/common';
import { ContactNoteConnectionService } from './contact-note-connection.service';
import { ContactNoteConnectionResolver } from './contact-note-connection.resolver';

@Module({
  providers: [ContactNoteConnectionResolver, ContactNoteConnectionService],
})
export class ContactNoteConnectionModule {}

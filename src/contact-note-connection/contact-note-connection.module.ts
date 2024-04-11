import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactNoteConnectionService } from './contact-note-connection.service';
import { ContactNoteConnectionResolver } from './contact-note-connection.resolver';
import { ContactNoteConnection } from './entities/contact-note-connection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactNoteConnection])],
  providers: [ContactNoteConnectionResolver, ContactNoteConnectionService],
})
export class ContactNoteConnectionModule {}

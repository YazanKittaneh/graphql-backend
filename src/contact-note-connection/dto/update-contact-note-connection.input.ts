import { CreateContactNoteConnectionInput } from './create-contact-note-connection.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateContactNoteConnectionInput extends PartialType(CreateContactNoteConnectionInput) {
  id: number;
}

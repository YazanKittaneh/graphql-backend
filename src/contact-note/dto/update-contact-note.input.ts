import { CreateContactNoteInput } from './create-contact-note.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateContactNoteInput extends PartialType(CreateContactNoteInput) {
  id: number;
}

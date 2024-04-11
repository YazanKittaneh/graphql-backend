import { CreateCompanyNoteConnectionInput } from './create-company-note-connection.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCompanyNoteConnectionInput extends PartialType(CreateCompanyNoteConnectionInput) {
  id: number;
}

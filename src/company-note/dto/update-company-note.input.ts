import { CreateCompanyNoteInput } from './create-company-note.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCompanyNoteInput extends PartialType(CreateCompanyNoteInput) {
  id: number;
}

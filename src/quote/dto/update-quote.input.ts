import { CreateQuoteInput } from './create-quote.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateQuoteInput extends PartialType(CreateQuoteInput) {
  id: number;
}

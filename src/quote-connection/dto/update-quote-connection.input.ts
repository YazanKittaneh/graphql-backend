import { CreateQuoteConnectionInput } from './create-quote-connection.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateQuoteConnectionInput extends PartialType(CreateQuoteConnectionInput) {
  id: number;
}

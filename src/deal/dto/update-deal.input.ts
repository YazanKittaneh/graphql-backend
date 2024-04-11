import { CreateDealInput } from './create-deal.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateDealInput extends PartialType(CreateDealInput) {
  id: number;
}

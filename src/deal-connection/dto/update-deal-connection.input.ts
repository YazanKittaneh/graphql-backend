import { CreateDealConnectionInput } from './create-deal-connection.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateDealConnectionInput extends PartialType(CreateDealConnectionInput) {
  id: number;
}

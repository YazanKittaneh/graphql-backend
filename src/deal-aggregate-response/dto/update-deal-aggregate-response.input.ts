import { CreateDealAggregateResponseInput } from './create-deal-aggregate-response.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateDealAggregateResponseInput extends PartialType(CreateDealAggregateResponseInput) {
  id: number;
}

import { CreateDealStageConnectionInput } from './create-deal-stage-connection.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateDealStageConnectionInput extends PartialType(CreateDealStageConnectionInput) {
  id: number;
}

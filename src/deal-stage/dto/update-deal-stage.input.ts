import { CreateDealStageInput } from './create-deal-stage.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateDealStageInput extends PartialType(CreateDealStageInput) {
  id: number;
}

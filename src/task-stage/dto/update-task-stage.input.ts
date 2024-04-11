import { CreateTaskStageInput } from './create-task-stage.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTaskStageInput extends PartialType(CreateTaskStageInput) {
  id: number;
}

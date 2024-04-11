import { CreateTaskStageConnectionInput } from './create-task-stage-connection.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTaskStageConnectionInput extends PartialType(CreateTaskStageConnectionInput) {
  id: number;
}

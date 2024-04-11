import { CreateTaskConnectionInput } from './create-task-connection.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTaskConnectionInput extends PartialType(CreateTaskConnectionInput) {
  id: number;
}

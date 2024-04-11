import { CreateTaskCommentConnectionInput } from './create-task-comment-connection.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTaskCommentConnectionInput extends PartialType(CreateTaskCommentConnectionInput) {
  id: number;
}

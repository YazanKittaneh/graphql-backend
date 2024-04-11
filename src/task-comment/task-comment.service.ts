import { Injectable } from '@nestjs/common';
import { CreateTaskCommentInput } from './dto/create-task-comment.input';
import { UpdateTaskCommentInput } from './dto/update-task-comment.input';

@Injectable()
export class TaskCommentService {
  create(createTaskCommentInput: CreateTaskCommentInput) {
    return 'This action adds a new taskComment';
  }

  findAll() {
    return `This action returns all taskComment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taskComment`;
  }

  update(id: number, updateTaskCommentInput: UpdateTaskCommentInput) {
    return `This action updates a #${id} taskComment`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskComment`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateTaskCommentConnectionInput } from './dto/create-task-comment-connection.input';
import { UpdateTaskCommentConnectionInput } from './dto/update-task-comment-connection.input';

@Injectable()
export class TaskCommentConnectionService {
  create(createTaskCommentConnectionInput: CreateTaskCommentConnectionInput) {
    return 'This action adds a new taskCommentConnection';
  }

  findAll() {
    return `This action returns all taskCommentConnection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taskCommentConnection`;
  }

  update(id: number, updateTaskCommentConnectionInput: UpdateTaskCommentConnectionInput) {
    return `This action updates a #${id} taskCommentConnection`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskCommentConnection`;
  }
}

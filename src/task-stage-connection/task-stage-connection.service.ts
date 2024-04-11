import { Injectable } from '@nestjs/common';
import { CreateTaskStageConnectionInput } from './dto/create-task-stage-connection.input';
import { UpdateTaskStageConnectionInput } from './dto/update-task-stage-connection.input';

@Injectable()
export class TaskStageConnectionService {
  create(createTaskStageConnectionInput: CreateTaskStageConnectionInput) {
    return 'This action adds a new taskStageConnection';
  }

  findAll() {
    return `This action returns all taskStageConnection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taskStageConnection`;
  }

  update(id: number, updateTaskStageConnectionInput: UpdateTaskStageConnectionInput) {
    return `This action updates a #${id} taskStageConnection`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskStageConnection`;
  }
}

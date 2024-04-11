import { Injectable } from '@nestjs/common';
import { CreateTaskStageInput } from './dto/create-task-stage.input';
import { UpdateTaskStageInput } from './dto/update-task-stage.input';

@Injectable()
export class TaskStageService {
  create(createTaskStageInput: CreateTaskStageInput) {
    return 'This action adds a new taskStage';
  }

  findAll() {
    return `This action returns all taskStage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taskStage`;
  }

  update(id: number, updateTaskStageInput: UpdateTaskStageInput) {
    return `This action updates a #${id} taskStage`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskStage`;
  }
}

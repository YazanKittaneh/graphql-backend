import { Injectable } from '@nestjs/common';
import { CreateTaskConnectionInput } from './dto/create-task-connection.input';
import { UpdateTaskConnectionInput } from './dto/update-task-connection.input';

@Injectable()
export class TaskConnectionService {
  create(createTaskConnectionInput: CreateTaskConnectionInput) {
    return 'This action adds a new taskConnection';
  }

  findAll() {
    return `This action returns all taskConnection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taskConnection`;
  }

  update(id: number, updateTaskConnectionInput: UpdateTaskConnectionInput) {
    return `This action updates a #${id} taskConnection`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskConnection`;
  }
}

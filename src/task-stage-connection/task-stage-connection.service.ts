import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskStageConnectionInput } from './dto/create-task-stage-connection.input';
import { UpdateTaskStageConnectionInput } from './dto/update-task-stage-connection.input';
import { TaskStageConnection } from './entities/task-stage-connection.entity';

@Injectable()
export class TaskStageConnectionService {
  constructor(
    @InjectRepository(TaskStageConnection)
    private taskStageConnectionRepository: Repository<TaskStageConnection>,
  ) {}
  async create(createTaskStageConnectionInput: CreateTaskStageConnectionInput): Promise<TaskStageConnection> {
    const newTaskStageConnection = this.taskStageConnectionRepository.create(createTaskStageConnectionInput);
    return this.taskStageConnectionRepository.save(newTaskStageConnection);
  }
    return 'This action adds a new taskStageConnection';
  }

  async findAll(): Promise<TaskStageConnection[]> {
    return this.taskStageConnectionRepository.find();
  }
    return `This action returns all taskStageConnection`;
  }

  async findOne(id: number): Promise<TaskStageConnection> {
    return this.taskStageConnectionRepository.findOne(id);
  }
    return `This action returns a #${id} taskStageConnection`;
  }

  async update(id: number, updateTaskStageConnectionInput: UpdateTaskStageConnectionInput): Promise<TaskStageConnection> {
    await this.taskStageConnectionRepository.update(id, updateTaskStageConnectionInput);
    return this.taskStageConnectionRepository.findOne(id);
  }
    return `This action updates a #${id} taskStageConnection`;
  }

  async remove(id: number): Promise<void> {
    await this.taskStageConnectionRepository.delete(id);
  }
    return `This action removes a #${id} taskStageConnection`;
  }
}

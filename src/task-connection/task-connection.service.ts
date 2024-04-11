import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskConnectionInput } from './dto/create-task-connection.input';
import { UpdateTaskConnectionInput } from './dto/update-task-connection.input';
import { TaskConnection } from './entities/task-connection.entity';

@Injectable()
export class TaskConnectionService {
  constructor(
    @InjectRepository(TaskConnection)
    private taskConnectionRepository: Repository<TaskConnection>,
  ) {}
  async create(createTaskConnectionInput: CreateTaskConnectionInput): Promise<TaskConnection> {
    const newTaskConnection = this.taskConnectionRepository.create(createTaskConnectionInput);
    return this.taskConnectionRepository.save(newTaskConnection);
  }
    return 'This action adds a new taskConnection';
  }

  async findAll(): Promise<TaskConnection[]> {
    return this.taskConnectionRepository.find();
  }
    return `This action returns all taskConnection`;
  }

  async findOne(id: number): Promise<TaskConnection> {
    return this.taskConnectionRepository.findOne(id);
  }
    return `This action returns a #${id} taskConnection`;
  }

  async update(id: number, updateTaskConnectionInput: UpdateTaskConnectionInput): Promise<TaskConnection> {
    await this.taskConnectionRepository.update(id, updateTaskConnectionInput);
    return this.taskConnectionRepository.findOne(id);
  }
    return `This action updates a #${id} taskConnection`;
  }

  async remove(id: number): Promise<void> {
    await this.taskConnectionRepository.delete(id);
  }
    return `This action removes a #${id} taskConnection`;
  }
}

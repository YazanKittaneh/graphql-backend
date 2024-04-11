import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskCommentConnectionInput } from './dto/create-task-comment-connection.input';
import { UpdateTaskCommentConnectionInput } from './dto/update-task-comment-connection.input';
import { TaskCommentConnection } from './entities/task-comment-connection.entity';

@Injectable()
export class TaskCommentConnectionService {
  constructor(
    @InjectRepository(TaskCommentConnection)
    private taskCommentConnectionRepository: Repository<TaskCommentConnection>,
  ) {}
  async create(createTaskCommentConnectionInput: CreateTaskCommentConnectionInput): Promise<TaskCommentConnection> {
    const newTaskCommentConnection = this.taskCommentConnectionRepository.create(createTaskCommentConnectionInput);
    return this.taskCommentConnectionRepository.save(newTaskCommentConnection);
  }
    return 'This action adds a new taskCommentConnection';
  }

  async findAll(): Promise<TaskCommentConnection[]> {
    return this.taskCommentConnectionRepository.find();
  }
    return `This action returns all taskCommentConnection`;
  }

  async findOne(id: number): Promise<TaskCommentConnection> {
    return this.taskCommentConnectionRepository.findOne(id);
  }
    return `This action returns a #${id} taskCommentConnection`;
  }

  async update(id: number, updateTaskCommentConnectionInput: UpdateTaskCommentConnectionInput): Promise<TaskCommentConnection> {
    await this.taskCommentConnectionRepository.update(id, updateTaskCommentConnectionInput);
    return this.taskCommentConnectionRepository.findOne(id);
  }
    return `This action updates a #${id} taskCommentConnection`;
  }

  async remove(id: number): Promise<void> {
    await this.taskCommentConnectionRepository.delete(id);
  }
    return `This action removes a #${id} taskCommentConnection`;
  }
}

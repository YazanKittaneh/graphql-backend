import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskStageInput } from './dto/create-task-stage.input';
import { UpdateTaskStageInput } from './dto/update-task-stage.input';
import { TaskStage } from './entities/task-stage.entity';

@Injectable()
export class TaskStageService {
  constructor(
    @InjectRepository(TaskStage)
    private taskStageRepository: Repository<TaskStage>,
  ) {}
  async create(createTaskStageInput: CreateTaskStageInput): Promise<TaskStage> {
    const newTaskStage = this.taskStageRepository.create(createTaskStageInput);
    return this.taskStageRepository.save(newTaskStage);
  }
    return 'This action adds a new taskStage';
  }

  async findAll(): Promise<TaskStage[]> {
    return this.taskStageRepository.find();
  }
    return `This action returns all taskStage`;
  }

  async findOne(id: number): Promise<TaskStage> {
    return this.taskStageRepository.findOne(id);
  }
    return `This action returns a #${id} taskStage`;
  }

  async update(id: number, updateTaskStageInput: UpdateTaskStageInput): Promise<TaskStage> {
    await this.taskStageRepository.update(id, updateTaskStageInput);
    return this.taskStageRepository.findOne(id);
  }
    return `This action updates a #${id} taskStage`;
  }

  async remove(id: number): Promise<void> {
    await this.taskStageRepository.delete(id);
  }
    return `This action removes a #${id} taskStage`;
  }
}

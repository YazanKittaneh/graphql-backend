import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskComment } from './entities/task-comment.entity';
import { CreateTaskCommentInput } from './dto/create-task-comment.input';
import { UpdateTaskCommentInput } from './dto/update-task-comment.input';

@Injectable()
export class TaskCommentService {
  constructor(
    @InjectRepository(TaskComment)
    private taskCommentRepository: Repository<TaskComment>,
  ) {}

@Injectable()
export class TaskCommentService {
  create(createTaskCommentInput: CreateTaskCommentInput) {
    const newTaskComment = this.taskCommentRepository.create(createTaskCommentInput);
    return this.taskCommentRepository.save(newTaskComment);
  }

  findAll() {
    return this.taskCommentRepository.find();
  }

  findOne(id: number) {
    return this.taskCommentRepository.findOne(id);
  }

  update(id: number, updateTaskCommentInput: UpdateTaskCommentInput) {
    return this.taskCommentRepository.save({ ...updateTaskCommentInput, id: Number(id) });
  }

  remove(id: number) {
    return this.taskCommentRepository.delete(id);
  }
}

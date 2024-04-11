import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskCommentService } from './task-comment.service';
import { TaskCommentResolver } from './task-comment.resolver';
import { TaskComment } from './entities/task-comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskComment])],
  providers: [TaskCommentResolver, TaskCommentService]
})
export class TaskCommentModule {}

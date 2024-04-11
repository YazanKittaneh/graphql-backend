import { Module } from '@nestjs/common';
import { TaskCommentService } from './task-comment.service';
import { TaskCommentResolver } from './task-comment.resolver';

@Module({
  providers: [TaskCommentResolver, TaskCommentService],
})
export class TaskCommentModule {}

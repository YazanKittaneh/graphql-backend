import { Module } from '@nestjs/common';
import { TaskCommentConnectionService } from './task-comment-connection.service';
import { TaskCommentConnectionResolver } from './task-comment-connection.resolver';

@Module({
  providers: [TaskCommentConnectionResolver, TaskCommentConnectionService],
})
export class TaskCommentConnectionModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskCommentConnectionService } from './task-comment-connection.service';
import { TaskCommentConnectionResolver } from './task-comment-connection.resolver';
import { TaskCommentConnection } from './entities/task-comment-connection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskCommentConnection])],
  providers: [TaskCommentConnectionResolver, TaskCommentConnectionService],
})
export class TaskCommentConnectionModule {}

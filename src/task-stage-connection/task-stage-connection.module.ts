import { Module } from '@nestjs/common';
import { TaskStageConnectionService } from './task-stage-connection.service';
import { TaskStageConnectionResolver } from './task-stage-connection.resolver';

@Module({
  providers: [TaskStageConnectionResolver, TaskStageConnectionService],
})
export class TaskStageConnectionModule {}

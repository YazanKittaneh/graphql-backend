import { Module } from '@nestjs/common';
import { TaskStageService } from './task-stage.service';
import { TaskStageResolver } from './task-stage.resolver';

@Module({
  providers: [TaskStageResolver, TaskStageService],
})
export class TaskStageModule {}

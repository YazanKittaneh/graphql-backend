import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskStageConnectionService } from './task-stage-connection.service';
import { TaskStageConnectionResolver } from './task-stage-connection.resolver';
import { TaskStageConnection } from './entities/task-stage-connection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskStageConnection])],
  providers: [TaskStageConnectionResolver, TaskStageConnectionService],
})
export class TaskStageConnectionModule {}

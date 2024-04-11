import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskStageService } from './task-stage.service';
import { TaskStageResolver } from './task-stage.resolver';
import { TaskStage } from './entities/task-stage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskStage])],
  providers: [TaskStageResolver, TaskStageService],
})
export class TaskStageModule {}

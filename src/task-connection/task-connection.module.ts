import { Module } from '@nestjs/common';
import { TaskConnectionService } from './task-connection.service';
import { TaskConnectionResolver } from './task-connection.resolver';

@Module({
  providers: [TaskConnectionResolver, TaskConnectionService],
})
export class TaskConnectionModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskConnectionService } from './task-connection.service';
import { TaskConnectionResolver } from './task-connection.resolver';
import { TaskConnection } from './entities/task-connection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskConnection])],
  providers: [TaskConnectionResolver, TaskConnectionService],
})
export class TaskConnectionModule {}

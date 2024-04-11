import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TaskStageConnectionService } from './task-stage-connection.service';
import { CreateTaskStageConnectionInput } from './dto/create-task-stage-connection.input';
import { UpdateTaskStageConnectionInput } from './dto/update-task-stage-connection.input';

@Resolver('TaskStageConnection')
export class TaskStageConnectionResolver {
  constructor(private readonly taskStageConnectionService: TaskStageConnectionService) {}

  @Mutation('createTaskStageConnection')
  create(@Args('createTaskStageConnectionInput') createTaskStageConnectionInput: CreateTaskStageConnectionInput) {
    return this.taskStageConnectionService.create(createTaskStageConnectionInput);
  }

  @Query('taskStageConnection')
  findAll() {
    return this.taskStageConnectionService.findAll();
  }

  @Query('taskStageConnection')
  findOne(@Args('id') id: number) {
    return this.taskStageConnectionService.findOne(id);
  }

  @Mutation('updateTaskStageConnection')
  update(@Args('updateTaskStageConnectionInput') updateTaskStageConnectionInput: UpdateTaskStageConnectionInput) {
    return this.taskStageConnectionService.update(updateTaskStageConnectionInput.id, updateTaskStageConnectionInput);
  }

  @Mutation('removeTaskStageConnection')
  remove(@Args('id') id: number) {
    return this.taskStageConnectionService.remove(id);
  }
}

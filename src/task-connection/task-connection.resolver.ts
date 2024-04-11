import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TaskConnectionService } from './task-connection.service';
import { CreateTaskConnectionInput } from './dto/create-task-connection.input';
import { UpdateTaskConnectionInput } from './dto/update-task-connection.input';

@Resolver('TaskConnection')
export class TaskConnectionResolver {
  constructor(private readonly taskConnectionService: TaskConnectionService) {}

  @Mutation('createTaskConnection')
  create(@Args('createTaskConnectionInput') createTaskConnectionInput: CreateTaskConnectionInput) {
    return this.taskConnectionService.create(createTaskConnectionInput);
  }

  @Query('taskConnection')
  findAll() {
    return this.taskConnectionService.findAll();
  }

  @Query('taskConnection')
  findOne(@Args('id') id: number) {
    return this.taskConnectionService.findOne(id);
  }

  @Mutation('updateTaskConnection')
  update(@Args('updateTaskConnectionInput') updateTaskConnectionInput: UpdateTaskConnectionInput) {
    return this.taskConnectionService.update(updateTaskConnectionInput.id, updateTaskConnectionInput);
  }

  @Mutation('removeTaskConnection')
  remove(@Args('id') id: number) {
    return this.taskConnectionService.remove(id);
  }
}

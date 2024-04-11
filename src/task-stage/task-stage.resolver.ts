import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TaskStageService } from './task-stage.service';
import { CreateTaskStageInput } from './dto/create-task-stage.input';
import { UpdateTaskStageInput } from './dto/update-task-stage.input';

@Resolver('TaskStage')
export class TaskStageResolver {
  constructor(private readonly taskStageService: TaskStageService) {}

  @Mutation('createTaskStage')
  create(@Args('createTaskStageInput') createTaskStageInput: CreateTaskStageInput) {
    return this.taskStageService.create(createTaskStageInput);
  }

  @Query('taskStage')
  findAll() {
    return this.taskStageService.findAll();
  }

  @Query('taskStage')
  findOne(@Args('id') id: number) {
    return this.taskStageService.findOne(id);
  }

  @Mutation('updateTaskStage')
  update(@Args('updateTaskStageInput') updateTaskStageInput: UpdateTaskStageInput) {
    return this.taskStageService.update(updateTaskStageInput.id, updateTaskStageInput);
  }

  @Mutation('removeTaskStage')
  remove(@Args('id') id: number) {
    return this.taskStageService.remove(id);
  }
}

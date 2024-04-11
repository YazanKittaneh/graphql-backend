import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TaskCommentConnectionService } from './task-comment-connection.service';
import { CreateTaskCommentConnectionInput } from './dto/create-task-comment-connection.input';
import { UpdateTaskCommentConnectionInput } from './dto/update-task-comment-connection.input';

@Resolver('TaskCommentConnection')
export class TaskCommentConnectionResolver {
  constructor(private readonly taskCommentConnectionService: TaskCommentConnectionService) {}

  @Mutation('createTaskCommentConnection')
  create(@Args('createTaskCommentConnectionInput') createTaskCommentConnectionInput: CreateTaskCommentConnectionInput) {
    return this.taskCommentConnectionService.create(createTaskCommentConnectionInput);
  }

  @Query('taskCommentConnection')
  findAll() {
    return this.taskCommentConnectionService.findAll();
  }

  @Query('taskCommentConnection')
  findOne(@Args('id') id: number) {
    return this.taskCommentConnectionService.findOne(id);
  }

  @Mutation('updateTaskCommentConnection')
  update(@Args('updateTaskCommentConnectionInput') updateTaskCommentConnectionInput: UpdateTaskCommentConnectionInput) {
    return this.taskCommentConnectionService.update(updateTaskCommentConnectionInput.id, updateTaskCommentConnectionInput);
  }

  @Mutation('removeTaskCommentConnection')
  remove(@Args('id') id: number) {
    return this.taskCommentConnectionService.remove(id);
  }
}

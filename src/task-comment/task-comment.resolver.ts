import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TaskCommentService } from './task-comment.service';
import { CreateTaskCommentInput } from './dto/create-task-comment.input';
import { UpdateTaskCommentInput } from './dto/update-task-comment.input';

@Resolver('TaskComment')
export class TaskCommentResolver {
  constructor(private readonly taskCommentService: TaskCommentService) {}

  @Mutation('createTaskComment')
  create(@Args('createTaskCommentInput') createTaskCommentInput: CreateTaskCommentInput) {
    return this.taskCommentService.create(createTaskCommentInput);
  }

  @Query('taskComment')
  findAll() {
    return this.taskCommentService.findAll();
  }

  @Query('taskComment')
  findOne(@Args('id') id: number) {
    return this.taskCommentService.findOne(id);
  }

  @Mutation('updateTaskComment')
  update(@Args('updateTaskCommentInput') updateTaskCommentInput: UpdateTaskCommentInput) {
    return this.taskCommentService.update(updateTaskCommentInput.id, updateTaskCommentInput);
  }

  @Mutation('removeTaskComment')
  remove(@Args('id') id: number) {
    return this.taskCommentService.remove(id);
  }
}

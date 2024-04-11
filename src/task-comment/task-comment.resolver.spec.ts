import { Test, TestingModule } from '@nestjs/testing';
import { TaskCommentResolver } from './task-comment.resolver';
import { TaskCommentService } from './task-comment.service';

describe('TaskCommentResolver', () => {
  let resolver: TaskCommentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskCommentResolver, TaskCommentService],
    }).compile();

    resolver = module.get<TaskCommentResolver>(TaskCommentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

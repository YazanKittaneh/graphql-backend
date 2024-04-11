import { Test, TestingModule } from '@nestjs/testing';
import { TaskCommentConnectionResolver } from './task-comment-connection.resolver';
import { TaskCommentConnectionService } from './task-comment-connection.service';

describe('TaskCommentConnectionResolver', () => {
  let resolver: TaskCommentConnectionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskCommentConnectionResolver, TaskCommentConnectionService],
    }).compile();

    resolver = module.get<TaskCommentConnectionResolver>(TaskCommentConnectionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

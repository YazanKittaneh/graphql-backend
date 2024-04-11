import { Test, TestingModule } from '@nestjs/testing';
import { TaskStageConnectionResolver } from './task-stage-connection.resolver';
import { TaskStageConnectionService } from './task-stage-connection.service';

describe('TaskStageConnectionResolver', () => {
  let resolver: TaskStageConnectionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskStageConnectionResolver, TaskStageConnectionService],
    }).compile();

    resolver = module.get<TaskStageConnectionResolver>(TaskStageConnectionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

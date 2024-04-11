import { Test, TestingModule } from '@nestjs/testing';
import { TaskStageResolver } from './task-stage.resolver';
import { TaskStageService } from './task-stage.service';

describe('TaskStageResolver', () => {
  let resolver: TaskStageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskStageResolver, TaskStageService],
    }).compile();

    resolver = module.get<TaskStageResolver>(TaskStageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

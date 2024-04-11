import { Test, TestingModule } from '@nestjs/testing';
import { TaskConnectionResolver } from './task-connection.resolver';
import { TaskConnectionService } from './task-connection.service';

describe('TaskConnectionResolver', () => {
  let resolver: TaskConnectionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskConnectionResolver, TaskConnectionService],
    }).compile();

    resolver = module.get<TaskConnectionResolver>(TaskConnectionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

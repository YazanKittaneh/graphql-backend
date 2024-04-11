import { Test, TestingModule } from '@nestjs/testing';
import { TaskStageConnectionService } from './task-stage-connection.service';

describe('TaskStageConnectionService', () => {
  let service: TaskStageConnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskStageConnectionService],
    }).compile();

    service = module.get<TaskStageConnectionService>(TaskStageConnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

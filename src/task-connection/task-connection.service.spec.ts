import { Test, TestingModule } from '@nestjs/testing';
import { TaskConnectionService } from './task-connection.service';

describe('TaskConnectionService', () => {
  let service: TaskConnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskConnectionService],
    }).compile();

    service = module.get<TaskConnectionService>(TaskConnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

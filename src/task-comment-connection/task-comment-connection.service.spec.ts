import { Test, TestingModule } from '@nestjs/testing';
import { TaskCommentConnectionService } from './task-comment-connection.service';

describe('TaskCommentConnectionService', () => {
  let service: TaskCommentConnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskCommentConnectionService],
    }).compile();

    service = module.get<TaskCommentConnectionService>(TaskCommentConnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

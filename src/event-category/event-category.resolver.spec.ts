import { Test, TestingModule } from '@nestjs/testing';
import { EventCategoryResolver } from './event-category.resolver';
import { EventCategoryService } from './event-category.service';

describe('EventCategoryResolver', () => {
  let resolver: EventCategoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventCategoryResolver, EventCategoryService],
    }).compile();

    resolver = module.get<EventCategoryResolver>(EventCategoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

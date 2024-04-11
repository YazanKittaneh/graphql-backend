import { Module } from '@nestjs/common';
import { EventCategoryService } from './event-category.service';
import { EventCategoryResolver } from './event-category.resolver';

@Module({
  providers: [EventCategoryResolver, EventCategoryService],
})
export class EventCategoryModule {}

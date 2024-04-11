import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EventCategoryService } from './event-category.service';
import { CreateEventCategoryInput } from './dto/create-event-category.input';
import { UpdateEventCategoryInput } from './dto/update-event-category.input';

@Resolver('EventCategory')
export import { CreateOneEventCategoryInput } from './dto/create-one-event-category.input';

@Resolver('EventCategory')
class EventCategoryResolver {
  constructor(private readonly eventCategoryService: EventCategoryService) {}

  @Mutation('createOneEventCategory')
  createOne(@Args('input') createOneEventCategoryInput: CreateOneEventCategoryInput) {
    return this.eventCategoryService.createOne(createOneEventCategoryInput);
  }
  @Mutation('createEventCategory')
  create(@Args('createEventCategoryInput') createEventCategoryInput: CreateEventCategoryInput) {
    return this.eventCategoryService.create(createEventCategoryInput);
  }

  @Query('eventCategory')
  findAll() {
    return this.eventCategoryService.findAll();
  }

  @Query('eventCategory')
  findOne(@Args('id') id: number) {
    return this.eventCategoryService.findOne(id);
  }

  @Mutation('updateEventCategory')
  update(@Args('updateEventCategoryInput') updateEventCategoryInput: UpdateEventCategoryInput) {
    return this.eventCategoryService.update(updateEventCategoryInput.id, updateEventCategoryInput);
  }

  @Mutation('removeEventCategory')
  remove(@Args('id') id: number) {
    return this.eventCategoryService.remove(id);
  }
}
  @Mutation('createManyEventCategories')
  createMany(@Args('input') createManyEventCategoriesInput: CreateManyEventCategoriesInput) {
    return this.eventCategoryService.createMany(createManyEventCategoriesInput.categories);
  }
  @Mutation('updateOneEventCategory')
  updateOne(@Args('input') updateOneEventCategoryInput: UpdateOneEventCategoryInput) {
    return this.eventCategoryService.updateOne(updateOneEventCategoryInput);
  }
  @Mutation('updateManyEventCategories')
  updateMany(@Args('input') updateManyEventCategoriesInput: UpdateManyEventCategoriesInput) {
    return this.eventCategoryService.updateMany(updateManyEventCategoriesInput);
  }

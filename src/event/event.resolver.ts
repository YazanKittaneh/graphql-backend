import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EventService } from './event.service';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';

@Resolver('Event')
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Mutation('createEvent')
  create(@Args('createEventInput') createEventInput: CreateEventInput) {
    return this.eventService.create(createEventInput);
  }

  @Query('event')
  findAll() {
    return this.eventService.findAll();
  }

  @Query('event')
  findOne(@Args('id') id: number) {
    return this.eventService.findOne(id);
  }

  @Mutation('updateEvent')
  update(@Args('updateEventInput') updateEventInput: UpdateEventInput) {
    return this.eventService.update(updateEventInput.id, updateEventInput);
  }

  @Mutation('removeEvent')
  remove(@Args('id') id: number) {
    return this.eventService.remove(id);
  }
}
  @Mutation('createOneEvent')
  createOne(@Args('input') createOneEventInput: CreateOneEventInput) {
    return this.eventService.create(createOneEventInput);
  }
  @Mutation('createManyEvents')
  createMany(@Args('input') createManyEventsInput: CreateManyEventsInput) {
    return this.eventService.createMany(createManyEventsInput);
  }
  @Mutation(() => Event)
  updateOneEvent(@Args('input') updateOneEventInput: UpdateOneEventInput) {
    return this.eventService.updateOne(updateOneEventInput);
  }
  @Mutation(() => UpdateManyResponse)
  updateManyEvents(@Args('input') updateManyEventsInput: UpdateManyEventsInput) {
    return this.eventService.updateMany(updateManyEventsInput);
  }

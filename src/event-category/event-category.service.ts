import { Injectable } from '@nestjs/common';
import { CreateEventCategoryInput } from './dto/create-event-category.input';
import { UpdateEventCategoryInput } from './dto/update-event-category.input';

import { CreateOneEventCategoryInput } from './dto/create-one-event-category.input';

@Injectable()
export class EventCategoryService {
  create(createEventCategoryInput: CreateEventCategoryInput) {
    return 'This action adds a new eventCategory';
  }

  createOne(createOneEventCategoryInput: CreateOneEventCategoryInput) {
    // Logic to create an event category in the database
    // This is a placeholder implementation
    return {
      id: '1', // Placeholder ID
      ...createOneEventCategoryInput,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: {}, // Placeholder user
      updatedBy: {}, // Placeholder user
      events: [], // Placeholder events
    };
  }

  findAll() {
    return `This action returns all eventCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventCategory`;
  }

  update(id: number, updateEventCategoryInput: UpdateEventCategoryInput) {
    return `This action updates a #${id} eventCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventCategory`;
  }
}

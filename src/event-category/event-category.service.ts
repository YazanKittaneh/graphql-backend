import { Injectable } from '@nestjs/common';
import { CreateEventCategoryInput } from './dto/create-event-category.input';
import { UpdateEventCategoryInput } from './dto/update-event-category.input';

@Injectable()
export class EventCategoryService {
  create(createEventCategoryInput: CreateEventCategoryInput) {
    return 'This action adds a new eventCategory';
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

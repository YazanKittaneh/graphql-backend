import { CreateEventCategoryInput } from './create-event-category.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateEventCategoryInput extends PartialType(CreateEventCategoryInput) {
  id: number;
}

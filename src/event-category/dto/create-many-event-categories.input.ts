import { InputType, Field } from '@nestjs/graphql';
import { CreateOneEventCategoryInput } from './create-one-event-category.input';

@InputType()
export class CreateManyEventCategoriesInput {
  @Field(() => [CreateOneEventCategoryInput])
  categories: CreateOneEventCategoryInput[];
}

import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class DeleteManyEventCategoriesInput {
  @Field(() => [ID])
  ids: string[];
}

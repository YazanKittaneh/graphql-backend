import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class DeleteOneEventCategoryInput {
  @Field(() => ID)
  id: string;
}

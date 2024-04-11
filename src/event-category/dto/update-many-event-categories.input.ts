import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class UpdateManyEventCategoriesInput {
  @Field(() => [ID])
  ids: string[];

  @Field({ nullable: true })
  title?: string;
}

import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOneEventCategoryInput {
  @Field()
  title: String;
}

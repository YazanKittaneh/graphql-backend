export class CreateEventInput {}
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOneEventInput {
  @Field()
  title: String;

  @Field()
  description: String;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field()
  color: String;

  @Field(() => ID)
  categoryId: string;
}

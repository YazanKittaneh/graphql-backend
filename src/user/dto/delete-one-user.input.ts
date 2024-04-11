import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class DeleteOneUserInput {
  @Field(() => ID)
  id: string;
}

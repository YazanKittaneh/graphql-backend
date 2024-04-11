import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class DeleteOneEventInput {
  @Field(() => ID)
  id: string;
}

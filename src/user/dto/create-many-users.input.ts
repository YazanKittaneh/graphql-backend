import { Field, InputType } from '@nestjs/graphql';
import { CreateOneUserInput } from './create-one-user.input';

@InputType()
export class CreateManyUsersInput {
  @Field(() => [CreateOneUserInput])
  users: CreateOneUserInput[];
}

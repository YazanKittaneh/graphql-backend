import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class DeleteManyUsersInput {
export class UpdateManyUsersInput {
  @Field(() => [ID])
  ids: string[];
}

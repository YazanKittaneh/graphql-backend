import { InputType, Field, ID } from '@nestjs/graphql';
import { UpdateOneEventInput } from './update-event.input';

@InputType()
export class UpdateManyEventsInput {
  @Field(() => [UpdateOneEventInput])
  events: UpdateOneEventInput[];
}

import { InputType, Field } from '@nestjs/graphql';
import { CreateOneEventInput } from './create-event.input';

@InputType()
export class CreateManyEventsInput {
  @Field(() => [CreateOneEventInput])
  events: CreateOneEventInput[];
}

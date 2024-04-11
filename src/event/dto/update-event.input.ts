import { InputType, Field, ID } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateOneEventInput } from './create-event.input';

@InputType()
export class UpdateOneEventInput extends PartialType(CreateOneEventInput) {
  @Field(() => ID)
  id: string;
}
import { PartialType } from '@nestjs/mapped-types';

export class UpdateEventInput extends PartialType(CreateEventInput) {
  id: number;
}

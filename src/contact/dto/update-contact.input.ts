import { InputType, Field } from '@nestjs/graphql';
import { IsInt } from 'class-validator';
import { CreateContactInput } from './create-contact.input';
import { PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContactInput extends PartialType(CreateContactInput) {
  @Field()
  @IsInt()
  id: number;
}

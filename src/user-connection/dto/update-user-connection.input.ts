import { CreateUserConnectionInput } from './create-user-connection.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserConnectionInput extends PartialType(CreateUserConnectionInput) {
  id: number;
}

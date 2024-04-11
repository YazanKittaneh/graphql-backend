import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { CreateOneUserInput } from './dto/create-one-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateManyUsersInput } from './dto/create-many-users.input';
import { UpdateOneUserInput } from './dto/update-one-user.input';

@Injectable()
export class UserService {
  updateOne(id: string, updateOneUserInput: UpdateOneUserInput) {
    // Implementation logic to update one user
    return `This action updates a user with id ${id}`;
  }
  createMany(createManyUsersInput: CreateManyUsersInput) {
    // Implementation logic to create many users
    return `This action adds new users with CreateManyUsersInput`;
  }
  createOne(createOneUserInput: CreateOneUserInput) {
    // Implementation logic to create one user
    return 'This action adds a new user with CreateOneUserInput';
  }

  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

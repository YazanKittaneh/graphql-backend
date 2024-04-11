import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { CreateOneUserInput } from './dto/create-one-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateManyUsersInput } from './dto/create-many-users.input';
import { UpdateOneUserInput } from './dto/update-one-user.input';

import { UpdateManyUsersInput } from './dto/update-many-users.input';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation('updateManyUsers')
  updateMany(@Args('input') updateManyUsersInput: UpdateManyUsersInput) {
    return this.userService.updateMany(updateManyUsersInput);
  }

  @Mutation('updateOneUser')
  updateOne(@Args('input') updateOneUserInput: UpdateOneUserInput) {
    return this.userService.updateOne(updateOneUserInput.id, updateOneUserInput);
  }
  @Mutation('createManyUsers')
  createMany(@Args('input') createManyUsersInput: CreateManyUsersInput) {
    return this.userService.createMany(createManyUsersInput.users);
  }
  @Mutation('createOneUser')
  createOne(@Args('input') createOneUserInput: CreateOneUserInput) {
    return this.userService.createOne(createOneUserInput);
  }

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query('user')
  findAll() {
    return this.userService.findAll();
  }

  @Query('user')
  findOne(@Args('id') id: number) {
    return this.userService.findOne(id);
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.userService.remove(id);
  }
}

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserConnectionService } from './user-connection.service';
import { CreateUserConnectionInput } from './dto/create-user-connection.input';
import { UpdateUserConnectionInput } from './dto/update-user-connection.input';

@Resolver('UserConnection')
export class UserConnectionResolver {
  constructor(private readonly userConnectionService: UserConnectionService) {}

  @Mutation('createUserConnection')
  create(@Args('createUserConnectionInput') createUserConnectionInput: CreateUserConnectionInput) {
    return this.userConnectionService.create(createUserConnectionInput);
  }

  @Query('userConnection')
  findAll() {
    return this.userConnectionService.findAll();
  }

  @Query('userConnection')
  findOne(@Args('id') id: number) {
    return this.userConnectionService.findOne(id);
  }

  @Mutation('updateUserConnection')
  update(@Args('updateUserConnectionInput') updateUserConnectionInput: UpdateUserConnectionInput) {
    return this.userConnectionService.update(updateUserConnectionInput.id, updateUserConnectionInput);
  }

  @Mutation('removeUserConnection')
  remove(@Args('id') id: number) {
    return this.userConnectionService.remove(id);
  }
}

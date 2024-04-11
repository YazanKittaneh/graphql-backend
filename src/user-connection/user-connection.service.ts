import { Injectable } from '@nestjs/common';
import { CreateUserConnectionInput } from './dto/create-user-connection.input';
import { UpdateUserConnectionInput } from './dto/update-user-connection.input';

@Injectable()
export class UserConnectionService {
  create(createUserConnectionInput: CreateUserConnectionInput) {
    return 'This action adds a new userConnection';
  }

  findAll() {
    return `This action returns all userConnection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userConnection`;
  }

  update(id: number, updateUserConnectionInput: UpdateUserConnectionInput) {
    return `This action updates a #${id} userConnection`;
  }

  remove(id: number) {
    return `This action removes a #${id} userConnection`;
  }
}

import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserInput, CreateManyUsersInput, DeleteManyUsersInput } from './dto'; // Assuming CreateManyUsersInput and DeleteManyUsersInput are defined in the same dto index file




@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  // Methods to be updated with MongoDB operations...
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(createUserInput: CreateUserInput): Promise<User> {
    return await this.userRepository.save(createUserInput);
  }

  // Assuming updateMany is not directly supported by TypeORM Repository API,
  // you would need to implement custom logic for batch updates.

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    await this.userRepository.update(id, updateUserInput);
    return this.userRepository.findOne(id);
  }

  async deleteMany(deleteManyUsersInput: DeleteManyUsersInput): Promise<{ deletedCount: number }> {
    const { affected } = await this.userRepository.delete(deleteManyUsersInput.ids);
    return { deletedCount: affected };
  }
}
  async createMany(createManyUsersInput: CreateManyUsersInput): Promise<User[]> {
    const users = this.userRepository.create(createManyUsersInput.users); // This method prepares the array of users for insertion
    return this.userRepository.save(users); // This method persists the prepared users into the database
  }
  }

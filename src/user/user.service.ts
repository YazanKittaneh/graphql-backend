import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserInput, CreateManyUsersInput, DeleteManyUsersInput } from './dto'; // Assuming CreateManyUsersInput and DeleteManyUsersInput are defined in the same dto index file




@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  // Corrected and implemented methods
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(createUserInput: CreateUserInput): Promise<User> {
    return await this.userRepository.save(createUserInput);
  }

  // Assuming updateMany is not directly supported by TypeORM Repository API,
  // you would need to implement custom logic for batch updates.

  async updateOne(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }
    const updated = await this.userRepository.save({ ...user, ...updateUserInput });
    return updated;
  }

  async deleteOne(deleteOneUserInput: DeleteOneUserInput): Promise<void> {
    const { affected } = await this.userRepository.delete(deleteOneUserInput.id);
    if (affected === 0) {
      throw new Error('No user found to delete');
    }
  }
}
  async createMany(createManyUsersInput: CreateManyUsersInput): Promise<User[]> {
    const users = this.userRepository.create(createManyUsersInput.users); // This method prepares the array of users for insertion
    return this.userRepository.save(users); // This method persists the prepared users into the database
  }
  
  async updateMany(updateManyUsersInput: UpdateManyUsersInput): Promise<{ updatedCount: number }> {
    const { ids, ...updateData } = updateManyUsersInput;
    const { affected } = await this.userRepository.update(ids, updateData);
    return { updatedCount: affected };
  }

  async deleteMany(deleteManyUsersInput: DeleteManyUsersInput): Promise<{ deletedCount: number }> {
    const { affected } = await this.userRepository.delete(deleteManyUsersInput.ids);
    if (!affected) {
      throw new Error('No users found to delete');
    }
    return { deletedCount: affected };
  }

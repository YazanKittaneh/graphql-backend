import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateManyUsersInput } from './dto/create-many-users.input'; // Assuming CreateManyUsersInput and DeleteManyUsersInput are defined in the same dto index file
import { CreateUserInput } from './dto/create-user.input'; // Assuming CreateManyUsersInput and DeleteManyUsersInput are defined in the same dto index file
import { DeleteManyUsersInput } from './dto/delete-many-users.input'; // Assuming CreateManyUsersInput and DeleteManyUsersInput are defined in the same dto index file


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

  async updateOne(id: string, updateUserInput: UpdateUserInput): Promise<User | null> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      return null; // Or throw a NotFoundException for better integration with NestJS HTTP exception filters
    }
    const updated = await this.userRepository.save({ ...user, ...updateUserInput });
    return updated;
  }

  async deleteOne(id: string): Promise<boolean> {
    const { affected } = await this.userRepository.delete(deleteOneUserInput.id);
    return affected > 0;
    }
  }
}
  async createMany(createManyUsersInput: CreateManyUsersInput): Promise<User[]> {
    const users = this.userRepository.create(createManyUsersInput.users); // This method prepares the array of users for insertion
    return this.userRepository.save(users); // This method persists the prepared users into the database
  }
  
  async updateMany(updateManyUsersInput: UpdateManyUsersInput): Promise<number> {
    const { ids, ...updateData } = updateManyUsersInput;
    const { affected } = await this.userRepository.update(ids, updateData);
    return affected;
  }

  async deleteMany(deleteManyUsersInput: DeleteManyUsersInput): Promise<{ deletedCount: number }> {
    const { affected } = await this.userRepository.delete(deleteManyUsersInput.ids);
  async deleteMany(ids: string[]): Promise<number> {
    const { affected } = await this.userRepository.delete(ids);
    return affected;
    }
  }

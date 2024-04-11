import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
}
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // Methods to be updated with MongoDB operations...
  async findAll() {
    return this.userRepository.find();
  }

  async create(createUserInput: CreateUserInput) {
    const newUser = this.userRepository.create(createUserInput);
    await this.userRepository.save(newUser);
    return newUser;
  }
  updateMany(updateManyUsersInput: UpdateManyUsersInput) {
    // Implementation logic to update many users
    // This is a placeholder implementation. You'll need to replace it with your actual database update logic.
    const updatedCount = updateManyUsersInput.ids.length; // Placeholder for actual update logic
    return { updatedCount };
  }
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

  deleteMany(deleteManyUsersInput: DeleteManyUsersInput) {
    // Implementation logic to delete many users
    // This is a placeholder implementation. You'll need to replace it with your actual database delete logic.
    const deletedCount = deleteManyUsersInput.ids.length; // Placeholder for actual delete logic
    return { deletedCount };
  }
}
  createMany(createManyUsersInput: CreateManyUsersInput) {
    // Implementation logic to create many users
    // This is a placeholder implementation. You'll need to replace it with your actual database creation logic.
    // Assuming each user is created successfully and we return their details:
    return createManyUsersInput.users.map(userInput => ({
      id: Math.floor(Math.random() * 10000).toString(), // Placeholder for actual ID generation logic
      ...userInput,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      createdBy: null, // Placeholder, adjust according to your user creation logic
      updatedBy: null, // Placeholder, adjust according to your user update logic
      companies: [], // Placeholder, adjust according to your companies connection logic
      contacts: [], // Placeholder, adjust according to your contacts connection logic
      events: [], // Placeholder, adjust according to your events connection logic
      tasks: [], // Placeholder, adjust according to your tasks connection logic
      deals: [], // Placeholder, adjust according to your deals connection logic
    }));
  }

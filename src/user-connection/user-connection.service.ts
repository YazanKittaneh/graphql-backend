import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserConnectionInput } from './dto/create-user-connection.input';
import { UpdateUserConnectionInput } from './dto/update-user-connection.input';
import { UserConnection } from './entities/user-connection.entity';

@Injectable()
export class UserConnectionService {
  constructor(
    @InjectRepository(UserConnection)
    private userConnectionRepository: Repository<UserConnection>,
  ) {}

  async create(createUserConnectionInput: CreateUserConnectionInput): Promise<UserConnection> {
    const newUserConnection = this.userConnectionRepository.create(createUserConnectionInput);
    return this.userConnectionRepository.save(newUserConnection);
  }

  async findAll(): Promise<UserConnection[]> {
    return this.userConnectionRepository.find();
  }

  async findOne(id: number): Promise<UserConnection> {
    return this.userConnectionRepository.findOne(id);
  }

  async update(id: number, updateUserConnectionInput: UpdateUserConnectionInput): Promise<UserConnection> {
    const userConnection = await this.userConnectionRepository.findOne(id);
    this.userConnectionRepository.merge(userConnection, updateUserConnectionInput);
    return this.userConnectionRepository.save(userConnection);
  }

  async remove(id: number): Promise<void> {
    await this.userConnectionRepository.delete(id);
  }
}

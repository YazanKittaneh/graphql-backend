import { Injectable } from '@nestjs/common';
import { CreateDealConnectionInput } from './dto/create-deal-connection.input';
import { UpdateDealConnectionInput } from './dto/update-deal-connection.input';

@Injectable()
export class DealConnectionService {
  create(createDealConnectionInput: CreateDealConnectionInput) {
    return 'This action adds a new dealConnection';
  }

  findAll() {
    return `This action returns all dealConnection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dealConnection`;
  }

  update(id: number, updateDealConnectionInput: UpdateDealConnectionInput) {
    return `This action updates a #${id} dealConnection`;
  }

  remove(id: number) {
    return `This action removes a #${id} dealConnection`;
  }
}

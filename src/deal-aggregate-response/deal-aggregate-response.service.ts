import { Injectable } from '@nestjs/common';
import { CreateDealAggregateResponseInput } from './dto/create-deal-aggregate-response.input';
import { UpdateDealAggregateResponseInput } from './dto/update-deal-aggregate-response.input';

@Injectable()
export class DealAggregateResponseService {
  create(createDealAggregateResponseInput: CreateDealAggregateResponseInput) {
    return 'This action adds a new dealAggregateResponse';
  }

  findAll() {
    return `This action returns all dealAggregateResponse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dealAggregateResponse`;
  }

  update(id: number, updateDealAggregateResponseInput: UpdateDealAggregateResponseInput) {
    return `This action updates a #${id} dealAggregateResponse`;
  }

  remove(id: number) {
    return `This action removes a #${id} dealAggregateResponse`;
  }
}

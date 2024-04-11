import { Injectable } from '@nestjs/common';
import { CreateDealStageConnectionInput } from './dto/create-deal-stage-connection.input';
import { UpdateDealStageConnectionInput } from './dto/update-deal-stage-connection.input';

@Injectable()
export class DealStageConnectionService {
  create(createDealStageConnectionInput: CreateDealStageConnectionInput) {
    return 'This action adds a new dealStageConnection';
  }

  findAll() {
    return `This action returns all dealStageConnection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dealStageConnection`;
  }

  update(id: number, updateDealStageConnectionInput: UpdateDealStageConnectionInput) {
    return `This action updates a #${id} dealStageConnection`;
  }

  remove(id: number) {
    return `This action removes a #${id} dealStageConnection`;
  }
}

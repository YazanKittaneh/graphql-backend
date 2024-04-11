import { Injectable } from '@nestjs/common';
import { CreateDealStageInput } from './dto/create-deal-stage.input';
import { UpdateDealStageInput } from './dto/update-deal-stage.input';

@Injectable()
export class DealStageService {
  create(createDealStageInput: CreateDealStageInput) {
    return 'This action adds a new dealStage';
  }

  findAll() {
    return `This action returns all dealStage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dealStage`;
  }

  update(id: number, updateDealStageInput: UpdateDealStageInput) {
    return `This action updates a #${id} dealStage`;
  }

  remove(id: number) {
    return `This action removes a #${id} dealStage`;
  }
}

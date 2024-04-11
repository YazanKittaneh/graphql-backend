import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DealStageService } from './deal-stage.service';
import { CreateDealStageInput } from './dto/create-deal-stage.input';
import { UpdateDealStageInput } from './dto/update-deal-stage.input';

@Resolver('DealStage')
export class DealStageResolver {
  constructor(private readonly dealStageService: DealStageService) {}

  @Mutation('createDealStage')
  create(@Args('createDealStageInput') createDealStageInput: CreateDealStageInput) {
    return this.dealStageService.create(createDealStageInput);
  }

  @Query('dealStage')
  findAll() {
    return this.dealStageService.findAll();
  }

  @Query('dealStage')
  findOne(@Args('id') id: number) {
    return this.dealStageService.findOne(id);
  }

  @Mutation('updateDealStage')
  update(@Args('updateDealStageInput') updateDealStageInput: UpdateDealStageInput) {
    return this.dealStageService.update(updateDealStageInput.id, updateDealStageInput);
  }

  @Mutation('removeDealStage')
  remove(@Args('id') id: number) {
    return this.dealStageService.remove(id);
  }
}

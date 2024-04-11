import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DealStageConnectionService } from './deal-stage-connection.service';
import { CreateDealStageConnectionInput } from './dto/create-deal-stage-connection.input';
import { UpdateDealStageConnectionInput } from './dto/update-deal-stage-connection.input';

@Resolver('DealStageConnection')
export class DealStageConnectionResolver {
  constructor(private readonly dealStageConnectionService: DealStageConnectionService) {}

  @Mutation('createDealStageConnection')
  create(@Args('createDealStageConnectionInput') createDealStageConnectionInput: CreateDealStageConnectionInput) {
    return this.dealStageConnectionService.create(createDealStageConnectionInput);
  }

  @Query('dealStageConnection')
  findAll() {
    return this.dealStageConnectionService.findAll();
  }

  @Query('dealStageConnection')
  findOne(@Args('id') id: number) {
    return this.dealStageConnectionService.findOne(id);
  }

  @Mutation('updateDealStageConnection')
  update(@Args('updateDealStageConnectionInput') updateDealStageConnectionInput: UpdateDealStageConnectionInput) {
    return this.dealStageConnectionService.update(updateDealStageConnectionInput.id, updateDealStageConnectionInput);
  }

  @Mutation('removeDealStageConnection')
  remove(@Args('id') id: number) {
    return this.dealStageConnectionService.remove(id);
  }
}

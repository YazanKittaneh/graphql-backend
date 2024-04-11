import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DealAggregateResponseService } from './deal-aggregate-response.service';
import { CreateDealAggregateResponseInput } from './dto/create-deal-aggregate-response.input';
import { UpdateDealAggregateResponseInput } from './dto/update-deal-aggregate-response.input';

@Resolver('DealAggregateResponse')
export class DealAggregateResponseResolver {
  constructor(private readonly dealAggregateResponseService: DealAggregateResponseService) {}

  @Mutation('createDealAggregateResponse')
  create(@Args('createDealAggregateResponseInput') createDealAggregateResponseInput: CreateDealAggregateResponseInput) {
    return this.dealAggregateResponseService.create(createDealAggregateResponseInput);
  }

  @Query('dealAggregateResponse')
  findAll() {
    return this.dealAggregateResponseService.findAll();
  }

  @Query('dealAggregateResponse')
  findOne(@Args('id') id: number) {
    return this.dealAggregateResponseService.findOne(id);
  }

  @Mutation('updateDealAggregateResponse')
  update(@Args('updateDealAggregateResponseInput') updateDealAggregateResponseInput: UpdateDealAggregateResponseInput) {
    return this.dealAggregateResponseService.update(updateDealAggregateResponseInput.id, updateDealAggregateResponseInput);
  }

  @Mutation('removeDealAggregateResponse')
  remove(@Args('id') id: number) {
    return this.dealAggregateResponseService.remove(id);
  }
}

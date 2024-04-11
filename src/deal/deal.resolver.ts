import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DealService } from './deal.service';
import { CreateDealInput } from './dto/create-deal.input';
import { UpdateDealInput } from './dto/update-deal.input';

@Resolver('Deal')
export class DealResolver {
  constructor(private readonly dealService: DealService) {}

  @Mutation('createDeal')
  create(@Args('createDealInput') createDealInput: CreateDealInput) {
    return this.dealService.create(createDealInput);
  }

  @Query('deal')
  findAll() {
    return this.dealService.findAll();
  }

  @Query('deal')
  findOne(@Args('id') id: number) {
    return this.dealService.findOne(id);
  }

  @Mutation('updateDeal')
  update(@Args('updateDealInput') updateDealInput: UpdateDealInput) {
    return this.dealService.update(updateDealInput.id, updateDealInput);
  }

  @Mutation('removeDeal')
  remove(@Args('id') id: number) {
    return this.dealService.remove(id);
  }
}

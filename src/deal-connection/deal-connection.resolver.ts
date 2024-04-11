import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DealConnectionService } from './deal-connection.service';
import { CreateDealConnectionInput } from './dto/create-deal-connection.input';
import { UpdateDealConnectionInput } from './dto/update-deal-connection.input';

@Resolver('DealConnection')
export class DealConnectionResolver {
  constructor(private readonly dealConnectionService: DealConnectionService) {}

  @Mutation('createDealConnection')
  create(@Args('createDealConnectionInput') createDealConnectionInput: CreateDealConnectionInput) {
    return this.dealConnectionService.create(createDealConnectionInput);
  }

  @Query('dealConnection')
  findAll() {
    return this.dealConnectionService.findAll();
  }

  @Query('dealConnection')
  findOne(@Args('id') id: number) {
    return this.dealConnectionService.findOne(id);
  }

  @Mutation('updateDealConnection')
  update(@Args('updateDealConnectionInput') updateDealConnectionInput: UpdateDealConnectionInput) {
    return this.dealConnectionService.update(updateDealConnectionInput.id, updateDealConnectionInput);
  }

  @Mutation('removeDealConnection')
  remove(@Args('id') id: number) {
    return this.dealConnectionService.remove(id);
  }
}

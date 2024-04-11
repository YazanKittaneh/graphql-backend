import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { QuoteConnectionService } from './quote-connection.service';
import { CreateQuoteConnectionInput } from './dto/create-quote-connection.input';
import { UpdateQuoteConnectionInput } from './dto/update-quote-connection.input';

@Resolver('QuoteConnection')
export class QuoteConnectionResolver {
  constructor(private readonly quoteConnectionService: QuoteConnectionService) {}

  @Mutation('createQuoteConnection')
  create(@Args('createQuoteConnectionInput') createQuoteConnectionInput: CreateQuoteConnectionInput) {
    return this.quoteConnectionService.create(createQuoteConnectionInput);
  }

  @Query('quoteConnection')
  findAll() {
    return this.quoteConnectionService.findAll();
  }

  @Query('quoteConnection')
  findOne(@Args('id') id: number) {
    return this.quoteConnectionService.findOne(id);
  }

  @Mutation('updateQuoteConnection')
  update(@Args('updateQuoteConnectionInput') updateQuoteConnectionInput: UpdateQuoteConnectionInput) {
    return this.quoteConnectionService.update(updateQuoteConnectionInput.id, updateQuoteConnectionInput);
  }

  @Mutation('removeQuoteConnection')
  remove(@Args('id') id: number) {
    return this.quoteConnectionService.remove(id);
  }
}

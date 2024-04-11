import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { QuoteService } from './quote.service';
import { CreateQuoteInput } from './dto/create-quote.input';
import { UpdateQuoteInput } from './dto/update-quote.input';

@Resolver('Quote')
export class QuoteResolver {
  constructor(private readonly quoteService: QuoteService) {}

  @Mutation('createQuote')
  create(@Args('createQuoteInput') createQuoteInput: CreateQuoteInput) {
    return this.quoteService.create(createQuoteInput);
  }

  @Query('quote')
  findAll() {
    return this.quoteService.findAll();
  }

  @Query('quote')
  findOne(@Args('id') id: number) {
    return this.quoteService.findOne(id);
  }

  @Mutation('updateQuote')
  update(@Args('updateQuoteInput') updateQuoteInput: UpdateQuoteInput) {
    return this.quoteService.update(updateQuoteInput.id, updateQuoteInput);
  }

  @Mutation('removeQuote')
  remove(@Args('id') id: number) {
    return this.quoteService.remove(id);
  }
}

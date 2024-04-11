import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuoteInput } from './dto/create-quote.input';
import { UpdateQuoteInput } from './dto/update-quote.input';
import { Quote } from './entities/quote.entity';


@Injectable()
export class QuoteService {
  constructor(
    @InjectRepository(Quote)
    private quoteRepository: Repository<Quote>,
  ) {}
export class QuoteService {
  create(createQuoteInput: CreateQuoteInput) {
    const newQuote = this.quoteRepository.create(createQuoteInput);
    return this.quoteRepository.save(newQuote);
  }

  findAll() {
    return this.quoteRepository.find();
  }

  findOne(id: number) {
    return this.quoteRepository.findOne(id);
  }

  update(id: number, updateQuoteInput: UpdateQuoteInput) {
    return this.quoteRepository.save({ ...updateQuoteInput, id: Number(id) });
  }

  remove(id: number) {
    return this.quoteRepository.delete(id);
  }
}

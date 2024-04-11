import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuoteConnection } from './entities/quote-connection.entity';
import { CreateQuoteConnectionInput } from './dto/create-quote-connection.input';
import { UpdateQuoteConnectionInput } from './dto/update-quote-connection.input';

@Injectable()
export class QuoteConnectionService {
  constructor(
    @InjectRepository(QuoteConnection)
    private quoteConnectionRepository: Repository<QuoteConnection>,
  ) {}

@Injectable()
export class QuoteConnectionService {
  create(createQuoteConnectionInput: CreateQuoteConnectionInput) {
    const newQuoteConnection = this.quoteConnectionRepository.create(createQuoteConnectionInput);
    return this.quoteConnectionRepository.save(newQuoteConnection);
  }

  findAll() {
    return this.quoteConnectionRepository.find();
  }

  findOne(id: number) {
    return this.quoteConnectionRepository.findOne(id);
  }

  update(id: number, updateQuoteConnectionInput: UpdateQuoteConnectionInput) {
    return this.quoteConnectionRepository.save({ ...updateQuoteConnectionInput, id: Number(id) });
  }

  remove(id: number) {
    return this.quoteConnectionRepository.delete(id);
  }
}

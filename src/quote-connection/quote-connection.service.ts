import { Injectable } from '@nestjs/common';
import { CreateQuoteConnectionInput } from './dto/create-quote-connection.input';
import { UpdateQuoteConnectionInput } from './dto/update-quote-connection.input';

@Injectable()
export class QuoteConnectionService {
  create(createQuoteConnectionInput: CreateQuoteConnectionInput) {
    return 'This action adds a new quoteConnection';
  }

  findAll() {
    return `This action returns all quoteConnection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quoteConnection`;
  }

  update(id: number, updateQuoteConnectionInput: UpdateQuoteConnectionInput) {
    return `This action updates a #${id} quoteConnection`;
  }

  remove(id: number) {
    return `This action removes a #${id} quoteConnection`;
  }
}

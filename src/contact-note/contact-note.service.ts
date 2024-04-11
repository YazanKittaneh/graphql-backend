import { Injectable } from '@nestjs/common';
import { CreateContactNoteInput } from './dto/create-contact-note.input';
import { UpdateContactNoteInput } from './dto/update-contact-note.input';

@Injectable()
export class ContactNoteService {
  create(createContactNoteInput: CreateContactNoteInput) {
    return 'This action adds a new contactNote';
  }

  findAll() {
    return `This action returns all contactNote`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactNote`;
  }

  update(id: number, updateContactNoteInput: UpdateContactNoteInput) {
    return `This action updates a #${id} contactNote`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactNote`;
  }
}

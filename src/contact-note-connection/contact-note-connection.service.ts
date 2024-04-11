import { Injectable } from '@nestjs/common';
import { CreateContactNoteConnectionInput } from './dto/create-contact-note-connection.input';
import { UpdateContactNoteConnectionInput } from './dto/update-contact-note-connection.input';

@Injectable()
export class ContactNoteConnectionService {
  create(createContactNoteConnectionInput: CreateContactNoteConnectionInput) {
    return 'This action adds a new contactNoteConnection';
  }

  findAll() {
    return `This action returns all contactNoteConnection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactNoteConnection`;
  }

  update(id: number, updateContactNoteConnectionInput: UpdateContactNoteConnectionInput) {
    return `This action updates a #${id} contactNoteConnection`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactNoteConnection`;
  }
}

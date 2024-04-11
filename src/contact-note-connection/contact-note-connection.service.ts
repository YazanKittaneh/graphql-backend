import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactNoteConnectionInput } from './dto/create-contact-note-connection.input';
import { UpdateContactNoteConnectionInput } from './dto/update-contact-note-connection.input';
import { ContactNoteConnection } from './entities/contact-note-connection.entity';

@Injectable()
export class ContactNoteConnectionService {
@Injectable()
export class ContactNoteConnectionService {
  constructor(
    @InjectRepository(ContactNoteConnection)
    private contactNoteConnectionRepository: Repository<ContactNoteConnection>,
  ) {}
    return 'This action adds a new contactNoteConnection';
  }

  async create(createContactNoteConnectionInput: CreateContactNoteConnectionInput): Promise<ContactNoteConnection> {
    const newContactNoteConnection = this.contactNoteConnectionRepository.create(createContactNoteConnectionInput);
    return this.contactNoteConnectionRepository.save(newContactNoteConnection);
  }
    return `This action returns all contactNoteConnection`;
  }

  async findAll(): Promise<ContactNoteConnection[]> {
    return this.contactNoteConnectionRepository.find();
  }
    return `This action returns a #${id} contactNoteConnection`;
  }

  async findOne(id: number): Promise<ContactNoteConnection> {
    return this.contactNoteConnectionRepository.findOne(id);
  }
    return `This action updates a #${id} contactNoteConnection`;
  }

  async update(id: number, updateContactNoteConnectionInput: UpdateContactNoteConnectionInput): Promise<ContactNoteConnection> {
    await this.contactNoteConnectionRepository.update(id, updateContactNoteConnectionInput);
    return this.contactNoteConnectionRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.contactNoteConnectionRepository.delete(id);
  }
    return `This action removes a #${id} contactNoteConnection`;
  }
}

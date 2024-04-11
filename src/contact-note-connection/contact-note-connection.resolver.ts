import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ContactNoteConnectionService } from './contact-note-connection.service';
import { CreateContactNoteConnectionInput } from './dto/create-contact-note-connection.input';
import { UpdateContactNoteConnectionInput } from './dto/update-contact-note-connection.input';

@Resolver('ContactNoteConnection')
export class ContactNoteConnectionResolver {
  constructor(private readonly contactNoteConnectionService: ContactNoteConnectionService) {}

  @Mutation('createContactNoteConnection')
  create(@Args('createContactNoteConnectionInput') createContactNoteConnectionInput: CreateContactNoteConnectionInput) {
    return this.contactNoteConnectionService.create(createContactNoteConnectionInput);
  }

  @Query('contactNoteConnection')
  findAll() {
    return this.contactNoteConnectionService.findAll();
  }

  @Query('contactNoteConnection')
  findOne(@Args('id') id: number) {
    return this.contactNoteConnectionService.findOne(id);
  }

  @Mutation('updateContactNoteConnection')
  update(@Args('updateContactNoteConnectionInput') updateContactNoteConnectionInput: UpdateContactNoteConnectionInput) {
    return this.contactNoteConnectionService.update(updateContactNoteConnectionInput.id, updateContactNoteConnectionInput);
  }

  @Mutation('removeContactNoteConnection')
  remove(@Args('id') id: number) {
    return this.contactNoteConnectionService.remove(id);
  }
}

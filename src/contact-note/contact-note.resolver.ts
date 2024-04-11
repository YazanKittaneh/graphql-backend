import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ContactNoteService } from './contact-note.service';
import { CreateContactNoteInput } from './dto/create-contact-note.input';
import { UpdateContactNoteInput } from './dto/update-contact-note.input';

@Resolver('ContactNote')
export class ContactNoteResolver {
  constructor(private readonly contactNoteService: ContactNoteService) {}

  @Mutation('createContactNote')
  create(@Args('createContactNoteInput') createContactNoteInput: CreateContactNoteInput) {
    return this.contactNoteService.create(createContactNoteInput);
  }

  @Query('contactNote')
  findAll() {
    return this.contactNoteService.findAll();
  }

  @Query('contactNote')
  findOne(@Args('id') id: number) {
    return this.contactNoteService.findOne(id);
  }

  @Mutation('updateContactNote')
  update(@Args('updateContactNoteInput') updateContactNoteInput: UpdateContactNoteInput) {
    return this.contactNoteService.update(updateContactNoteInput.id, updateContactNoteInput);
  }

  @Mutation('removeContactNote')
  remove(@Args('id') id: number) {
    return this.contactNoteService.remove(id);
  }
}

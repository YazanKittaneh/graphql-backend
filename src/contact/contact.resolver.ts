import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ContactService } from './contact.service';
import { CreateContactInput } from './dto/create-contact.input';
import { UpdateContactInput } from './dto/update-contact.input';

@Resolver('Contact')
export class ContactResolver {
  constructor(private readonly contactService: ContactService) {}

  @Mutation('createContact')
  create(@Args('createContactInput') createContactInput: CreateContactInput) {
    return this.contactService.create(createContactInput);
  }

  @Query('contact')
  findAll() {
    return this.contactService.findAll();
  }

  @Query('contact')
  findOne(@Args('id') id: number) {
    return this.contactService.findOne(id);
  }

  @Mutation('updateContact')
  update(@Args('updateContactInput') updateContactInput: UpdateContactInput) {
    return this.contactService.update(updateContactInput.id, updateContactInput);
  }

  @Mutation('removeContact')
  remove(@Args('id') id: number) {
    return this.contactService.remove(id);
  }
}

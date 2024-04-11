import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CompanyNoteConnectionService } from './company-note-connection.service';
import { CreateCompanyNoteConnectionInput } from './dto/create-company-note-connection.input';
import { UpdateCompanyNoteConnectionInput } from './dto/update-company-note-connection.input';

@Resolver('CompanyNoteConnection')
export class CompanyNoteConnectionResolver {
  constructor(private readonly companyNoteConnectionService: CompanyNoteConnectionService) {}

  @Mutation('createCompanyNoteConnection')
  create(@Args('createCompanyNoteConnectionInput') createCompanyNoteConnectionInput: CreateCompanyNoteConnectionInput) {
    return this.companyNoteConnectionService.create(createCompanyNoteConnectionInput);
  }

  @Query('companyNoteConnection')
  findAll() {
    return this.companyNoteConnectionService.findAll();
  }

  @Query('companyNoteConnection')
  findOne(@Args('id') id: number) {
    return this.companyNoteConnectionService.findOne(id);
  }

  @Mutation('updateCompanyNoteConnection')
  update(@Args('updateCompanyNoteConnectionInput') updateCompanyNoteConnectionInput: UpdateCompanyNoteConnectionInput) {
    return this.companyNoteConnectionService.update(updateCompanyNoteConnectionInput.id, updateCompanyNoteConnectionInput);
  }

  @Mutation('removeCompanyNoteConnection')
  remove(@Args('id') id: number) {
    return this.companyNoteConnectionService.remove(id);
  }
}

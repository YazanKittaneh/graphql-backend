import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CompanyNoteService } from './company-note.service';
import { CreateCompanyNoteInput } from './dto/create-company-note.input';
import { UpdateCompanyNoteInput } from './dto/update-company-note.input';

@Resolver('CompanyNote')
export class CompanyNoteResolver {
  constructor(private readonly companyNoteService: CompanyNoteService) {}

  @Mutation('createCompanyNote')
  create(@Args('createCompanyNoteInput') createCompanyNoteInput: CreateCompanyNoteInput) {
    return this.companyNoteService.create(createCompanyNoteInput);
  }

  @Query('companyNote')
  findAll() {
    return this.companyNoteService.findAll();
  }

  @Query('companyNote')
  findOne(@Args('id') id: number) {
    return this.companyNoteService.findOne(id);
  }

  @Mutation('updateCompanyNote')
  update(@Args('updateCompanyNoteInput') updateCompanyNoteInput: UpdateCompanyNoteInput) {
    return this.companyNoteService.update(updateCompanyNoteInput.id, updateCompanyNoteInput);
  }

  @Mutation('removeCompanyNote')
  remove(@Args('id') id: number) {
    return this.companyNoteService.remove(id);
  }
}

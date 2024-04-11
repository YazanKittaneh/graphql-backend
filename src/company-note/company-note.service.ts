import { Injectable } from '@nestjs/common';
import { CreateCompanyNoteInput } from './dto/create-company-note.input';
import { UpdateCompanyNoteInput } from './dto/update-company-note.input';

@Injectable()
export class CompanyNoteService {
  create(createCompanyNoteInput: CreateCompanyNoteInput) {
    return 'This action adds a new companyNote';
  }

  findAll() {
    return `This action returns all companyNote`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companyNote`;
  }

  update(id: number, updateCompanyNoteInput: UpdateCompanyNoteInput) {
    return `This action updates a #${id} companyNote`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyNote`;
  }
}

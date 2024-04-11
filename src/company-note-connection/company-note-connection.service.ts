import { Injectable } from '@nestjs/common';
import { CreateCompanyNoteConnectionInput } from './dto/create-company-note-connection.input';
import { UpdateCompanyNoteConnectionInput } from './dto/update-company-note-connection.input';

@Injectable()
export class CompanyNoteConnectionService {
  create(createCompanyNoteConnectionInput: CreateCompanyNoteConnectionInput) {
    return 'This action adds a new companyNoteConnection';
  }

  findAll() {
    return `This action returns all companyNoteConnection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companyNoteConnection`;
  }

  update(id: number, updateCompanyNoteConnectionInput: UpdateCompanyNoteConnectionInput) {
    return `This action updates a #${id} companyNoteConnection`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyNoteConnection`;
  }
}

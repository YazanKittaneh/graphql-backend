import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyNoteConnectionInput } from './dto/create-company-note-connection.input';
import { UpdateCompanyNoteConnectionInput } from './dto/update-company-note-connection.input';
import { CompanyNoteConnection } from './entities/company-note-connection.entity';

@Injectable()
export class CompanyNoteConnectionService {
  constructor(
    @InjectRepository(CompanyNoteConnection)
    private companyNoteConnectionRepository: Repository<CompanyNoteConnection>,
  ) {}

@Injectable()
export class CompanyNoteConnectionService {
  create(createCompanyNoteConnectionInput: CreateCompanyNoteConnectionInput) {
    const newCompanyNoteConnection = this.companyNoteConnectionRepository.create(createCompanyNoteConnectionInput);
    return this.companyNoteConnectionRepository.save(newCompanyNoteConnection);
  }

  findAll() {
    return this.companyNoteConnectionRepository.find();
  }

  findOne(id: number) {
    return this.companyNoteConnectionRepository.findOne(id);
  }

  update(id: number, updateCompanyNoteConnectionInput: UpdateCompanyNoteConnectionInput) {
    return this.companyNoteConnectionRepository.save({ ...updateCompanyNoteConnectionInput, id: Number(id) });
  }

  remove(id: number) {
    return this.companyNoteConnectionRepository.delete(id);
  }
}

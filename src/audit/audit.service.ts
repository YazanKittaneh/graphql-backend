import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuditInput } from './dto/create-audit.input';
import { UpdateAuditInput } from './dto/update-audit.input';
import { Audit } from './entities/audit.entity';

@Injectable()
export class AuditService {
  constructor(
    @InjectRepository(Audit)
    private auditRepository: Repository<Audit>,
  ) {}
export class AuditService {
  create(createAuditInput: CreateAuditInput) {
    const newAudit = this.auditRepository.create(createAuditInput);
    return this.auditRepository.save(newAudit);
  }

  findAll() {
    return this.auditRepository.find();
  }

  findOne(id: number) {
    return this.auditRepository.findOne(id);
  }

  update(id: number, updateAuditInput: UpdateAuditInput) {
    return this.auditRepository.save({ ...updateAuditInput, id: Number(id) });
  }

  remove(id: number) {
    return this.auditRepository.delete(id);
  }
}

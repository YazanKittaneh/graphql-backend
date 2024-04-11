import { Injectable } from '@nestjs/common';
import { CreateAuditConnectionInput } from './dto/create-audit-connection.input';
import { UpdateAuditConnectionInput } from './dto/update-audit-connection.input';

@Injectable()
export class AuditConnectionService {
  create(createAuditConnectionInput: CreateAuditConnectionInput) {
    return 'This action adds a new auditConnection';
  }

  findAll() {
    return `This action returns all auditConnection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auditConnection`;
  }

  update(id: number, updateAuditConnectionInput: UpdateAuditConnectionInput) {
    return `This action updates a #${id} auditConnection`;
  }

  remove(id: number) {
    return `This action removes a #${id} auditConnection`;
  }
}

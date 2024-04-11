import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuditConnectionService } from './audit-connection.service';
import { CreateAuditConnectionInput } from './dto/create-audit-connection.input';
import { UpdateAuditConnectionInput } from './dto/update-audit-connection.input';

@Resolver('AuditConnection')
export class AuditConnectionResolver {
  constructor(private readonly auditConnectionService: AuditConnectionService) {}

  @Mutation('createAuditConnection')
  create(@Args('createAuditConnectionInput') createAuditConnectionInput: CreateAuditConnectionInput) {
    return this.auditConnectionService.create(createAuditConnectionInput);
  }

  @Query('auditConnection')
  findAll() {
    return this.auditConnectionService.findAll();
  }

  @Query('auditConnection')
  findOne(@Args('id') id: number) {
    return this.auditConnectionService.findOne(id);
  }

  @Mutation('updateAuditConnection')
  update(@Args('updateAuditConnectionInput') updateAuditConnectionInput: UpdateAuditConnectionInput) {
    return this.auditConnectionService.update(updateAuditConnectionInput.id, updateAuditConnectionInput);
  }

  @Mutation('removeAuditConnection')
  remove(@Args('id') id: number) {
    return this.auditConnectionService.remove(id);
  }
}

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuditService } from './audit.service';
import { CreateAuditInput } from './dto/create-audit.input';
import { UpdateAuditInput } from './dto/update-audit.input';

@Resolver('Audit')
export class AuditResolver {
  constructor(private readonly auditService: AuditService) {}

  @Mutation('createAudit')
  create(@Args('createAuditInput') createAuditInput: CreateAuditInput) {
    return this.auditService.create(createAuditInput);
  }

  @Query('audit')
  findAll() {
    return this.auditService.findAll();
  }

  @Query('audit')
  findOne(@Args('id') id: number) {
    return this.auditService.findOne(id);
  }

  @Mutation('updateAudit')
  update(@Args('updateAuditInput') updateAuditInput: UpdateAuditInput) {
    return this.auditService.update(updateAuditInput.id, updateAuditInput);
  }

  @Mutation('removeAudit')
  remove(@Args('id') id: number) {
    return this.auditService.remove(id);
  }
}

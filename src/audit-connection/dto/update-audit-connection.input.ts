import { CreateAuditConnectionInput } from './create-audit-connection.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAuditConnectionInput extends PartialType(CreateAuditConnectionInput) {
  id: number;
}

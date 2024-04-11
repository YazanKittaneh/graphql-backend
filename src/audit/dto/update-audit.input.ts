import { CreateAuditInput } from './create-audit.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAuditInput extends PartialType(CreateAuditInput) {
  id: number;
}

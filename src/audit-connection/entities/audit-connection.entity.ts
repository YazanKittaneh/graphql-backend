export class AuditConnection {}
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AuditConnection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  exampleField: number;
}

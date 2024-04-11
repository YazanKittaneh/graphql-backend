import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Audit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  exampleField: number;
}

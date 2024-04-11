import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CompanyNoteConnection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  exampleField: number;
}

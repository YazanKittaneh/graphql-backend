import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Deal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  exampleField: number;
}

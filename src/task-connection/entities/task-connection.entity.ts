import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TaskConnection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  exampleField: number; // Adjust according to actual fields needed
}

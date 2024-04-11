import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TaskComment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  exampleField: number; // Assuming exampleField is an integer for demonstration purposes
}

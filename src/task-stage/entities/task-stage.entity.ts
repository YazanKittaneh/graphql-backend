import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TaskStage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  exampleField: number; // Adjust according to actual fields needed
}

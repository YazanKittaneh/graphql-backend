import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TaskStageConnection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  exampleField: number; // Adjust according to actual fields needed
}

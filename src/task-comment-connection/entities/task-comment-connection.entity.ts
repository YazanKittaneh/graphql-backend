import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TaskCommentConnection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  exampleField: number;
}

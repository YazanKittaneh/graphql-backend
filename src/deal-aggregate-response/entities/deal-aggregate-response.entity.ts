import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DealAggregateResponse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  exampleField: number; // Adjust according to actual fields needed
}

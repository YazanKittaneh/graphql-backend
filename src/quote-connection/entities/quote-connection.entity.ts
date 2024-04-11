import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QuoteConnection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  exampleField: number; // Assuming exampleField is an integer for demonstration purposes
}

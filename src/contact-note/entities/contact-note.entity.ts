import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ContactNote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  note: string; // Assuming a simple structure for demonstration
}

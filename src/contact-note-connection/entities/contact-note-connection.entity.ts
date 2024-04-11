export class ContactNoteConnection {}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ContactNoteConnection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  exampleField: number; // Placeholder for actual fields
}

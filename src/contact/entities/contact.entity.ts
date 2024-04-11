export class Contact {}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  jobTitle?: string;

  @Column({ nullable: true })
  timezone?: string;

  @Column({ nullable: true })
  avatarUrl?: string;

  // Additional fields like createdAt, updatedAt, createdBy, etc., would need to be defined here as well.
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  phone: string;

  @Column({ type: 'varchar', nullable: true })
  jobTitle: string;

  @Column({ type: 'varchar', nullable: true })
  timezone: string;

  @Column({ type: 'varchar' })
  role: string;

  @Column({ type: 'varchar', nullable: true })
  avatarUrl: string;

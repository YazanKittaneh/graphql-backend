export class CompanyNote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  note: string;

  @Column()
  companyId: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}

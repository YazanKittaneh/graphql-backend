import { Test, TestingModule } from '@nestjs/testing';
import { CompanyNoteConnectionService } from './company-note-connection.service';

describe('CompanyNoteConnectionService', () => {
  let service: CompanyNoteConnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyNoteConnectionService],
    }).compile();

    service = module.get<CompanyNoteConnectionService>(CompanyNoteConnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

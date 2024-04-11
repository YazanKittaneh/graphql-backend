import { Test, TestingModule } from '@nestjs/testing';
import { CompanyNoteConnectionResolver } from './company-note-connection.resolver';
import { CompanyNoteConnectionService } from './company-note-connection.service';

describe('CompanyNoteConnectionResolver', () => {
  let resolver: CompanyNoteConnectionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyNoteConnectionResolver, CompanyNoteConnectionService],
    }).compile();

    resolver = module.get<CompanyNoteConnectionResolver>(CompanyNoteConnectionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

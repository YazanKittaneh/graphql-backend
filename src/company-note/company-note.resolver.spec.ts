import { Test, TestingModule } from '@nestjs/testing';
import { CompanyNoteResolver } from './company-note.resolver';
import { CompanyNoteService } from './company-note.service';

describe('CompanyNoteResolver', () => {
  let resolver: CompanyNoteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyNoteResolver, CompanyNoteService],
    }).compile();

    resolver = module.get<CompanyNoteResolver>(CompanyNoteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

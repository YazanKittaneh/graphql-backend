import { Test, TestingModule } from '@nestjs/testing';
import { ContactNoteResolver } from './contact-note.resolver';
import { ContactNoteService } from './contact-note.service';

describe('ContactNoteResolver', () => {
  let resolver: ContactNoteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactNoteResolver, ContactNoteService],
    }).compile();

    resolver = module.get<ContactNoteResolver>(ContactNoteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

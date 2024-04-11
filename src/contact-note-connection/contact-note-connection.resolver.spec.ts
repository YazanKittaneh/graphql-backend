import { Test, TestingModule } from '@nestjs/testing';
import { ContactNoteConnectionResolver } from './contact-note-connection.resolver';
import { ContactNoteConnectionService } from './contact-note-connection.service';

describe('ContactNoteConnectionResolver', () => {
  let resolver: ContactNoteConnectionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactNoteConnectionResolver, ContactNoteConnectionService],
    }).compile();

    resolver = module.get<ContactNoteConnectionResolver>(ContactNoteConnectionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

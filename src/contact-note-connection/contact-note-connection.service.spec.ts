import { Test, TestingModule } from '@nestjs/testing';
import { ContactNoteConnectionService } from './contact-note-connection.service';

describe('ContactNoteConnectionService', () => {
  let service: ContactNoteConnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactNoteConnectionService],
    }).compile();

    service = module.get<ContactNoteConnectionService>(ContactNoteConnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

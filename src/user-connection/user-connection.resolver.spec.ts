import { Test, TestingModule } from '@nestjs/testing';
import { UserConnectionResolver } from './user-connection.resolver';
import { UserConnectionService } from './user-connection.service';

describe('UserConnectionResolver', () => {
  let resolver: UserConnectionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserConnectionResolver, UserConnectionService],
    }).compile();

    resolver = module.get<UserConnectionResolver>(UserConnectionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

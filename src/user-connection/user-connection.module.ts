import { Module } from '@nestjs/common';
import { UserConnectionService } from './user-connection.service';
import { UserConnectionResolver } from './user-connection.resolver';

@Module({
  providers: [UserConnectionResolver, UserConnectionService],
})
export class UserConnectionModule {}

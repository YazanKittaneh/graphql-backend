import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserConnectionService } from './user-connection.service';
import { UserConnectionResolver } from './user-connection.resolver';
import { UserConnection } from './entities/user-connection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserConnection])],
  providers: [UserConnectionResolver, UserConnectionService]
})
export class UserConnectionModule {}

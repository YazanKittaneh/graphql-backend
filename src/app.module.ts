import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TodoItemModule } from './todo-item/todo-item.module';
import { ContactModule } from './contact/contact.module';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';
import { EventModule } from './event/event.module';
import { EventCategoryModule } from './event-category/event-category.module';
import { TaskModule } from './task/task.module';
import { TaskCommentModule } from './task-comment/task-comment.module';
import { TaskStageModule } from './task-stage/task-stage.module';
import { CompanyNoteModule } from './company-note/company-note.module';
import { ContactNoteModule } from './contact-note/contact-note.module';
import { DealStageModule } from './deal-stage/deal-stage.module';
import { DealModule } from './deal/deal.module';
import { QuoteModule } from './quote/quote.module';
import { AuditModule } from './audit/audit.module';
import { UserConnectionModule } from './user-connection/user-connection.module';
import { TaskConnectionModule } from './task-connection/task-connection.module';
import { TaskCommentConnectionModule } from './task-comment-connection/task-comment-connection.module';
import { TaskStageConnectionModule } from './task-stage-connection/task-stage-connection.module';
import { CompanyNoteConnectionModule } from './company-note-connection/company-note-connection.module';
import { ContactNoteConnectionModule } from './contact-note-connection/contact-note-connection.module';
import { DealStageConnectionModule } from './deal-stage-connection/deal-stage-connection.module';
import { DealAggregateResponseModule } from './deal-aggregate-response/deal-aggregate-response.module';
import { DealConnectionModule } from './deal-connection/deal-connection.module';
import { QuoteConnectionModule } from './quote-connection/quote-connection.module';
import { AuditConnectionModule } from './audit-connection/audit-connection.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'gettingstarted',
      username: 'gettingstarted',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'mydatabase',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // set to true to automatically generate schema
      autoSchemaFile: true,
    }),
    TodoItemModule,
    ContactModule,
    UserModule,
    CompanyModule,
    EventModule,
    EventCategoryModule,
    TaskModule,
    TaskCommentModule,
    TaskStageModule,
    CompanyNoteModule,
    ContactNoteModule,
    DealStageModule,
    DealModule,
    QuoteModule,
    AuditModule,
    UserConnectionModule,
    TaskConnectionModule,
    TaskCommentConnectionModule,
    TaskStageConnectionModule,
    CompanyNoteConnectionModule,
    ContactNoteConnectionModule,
    DealStageConnectionModule,
    DealAggregateResponseModule,
    DealConnectionModule,
    QuoteConnectionModule,
    AuditConnectionModule,
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: 'mongodb://localhost:27017/crm',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

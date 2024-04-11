import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  phone: string;

  @Prop()
  jobTitle: string;

  @Prop()
  timezone: string;

  @Prop({ required: true })
  role: string;

  @Prop()
  avatarUrl: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
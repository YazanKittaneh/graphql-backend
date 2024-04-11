import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateOneUserInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  phone?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  jobTitle?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  timezone?: string;

  @Field()
  @IsNotEmpty()
  role: string; // Assuming Role is a string for simplicity, adjust based on actual Role type

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  avatarUrl?: string;
}

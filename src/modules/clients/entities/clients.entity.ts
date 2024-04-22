import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { IsEmail } from 'class-validator';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Clients extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  gender: string;

  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  created?: Date;
}

export const clienSchema = SchemaFactory.createForClass(Clients);

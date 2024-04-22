import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Books extends Document {
  @Prop({ required: true })
  BookID: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true, min: 1, max: 5000 })
  pages: number;

  @Prop({ required: true })
  describe: string;

  createdAt?: Date;
}

export const BookSchema = SchemaFactory.createForClass(Books);

BookSchema.index(
  { BookID: 1 },
  {
    name: 'Book search',
  },
);

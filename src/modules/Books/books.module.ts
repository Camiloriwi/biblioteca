import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Books, BookSchema } from './entitys/books.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Books.name,
        schema: BookSchema,
      },
    ]),
  ],
})
export class BooksModule {}

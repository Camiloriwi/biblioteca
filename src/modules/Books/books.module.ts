import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Books, BookSchema } from './entitys/books.entity';
import { BooksService } from './services/Books.service';
import { BooksController } from './controllers/books.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Books.name,
        schema: BookSchema,
      },
    ]),
  ],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}

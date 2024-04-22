import { Injectable, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Books } from '../entitys/books.entity';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Books.name) private BookModel: Model<Books>) {}

  async finAll() {
    return await this.BookModel.find().exec();
  }

  async create(@Body() body): Promise<Books> {
    const newBook = new this.BookModel(body);
    return await newBook.save();
  }

  async update(id: string, body) {
    return await this.BookModel.findByIdAndUpdate(id, body, {
      new: true,
    }).exec();
  }

  async delete(id: string) {
    return await this.BookModel.findByIdAndDelete(id).exec();
  }
}

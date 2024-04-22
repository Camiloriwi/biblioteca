import { BooksService } from '../services/Books.service';
import {
  Controller,
  Get,
  Put,
  Patch,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('books')
export class BooksController {
  constructor(private readonly service: BooksService) {}

  @Get('/melo')
  async getBooks() {
    return this.service.findAll();
  }

  @Post('newBook')
  async create(@Body() body) {
    return await this.service.create(body);
  }

  @Put(':_id')
  async update(@Param('_id') id, @Body() body) {
    return await this.service.update(id, body);
  }

  @Delete(':_id')
  async delete(@Param('_id') id) {
    return await this.service.delete(id);
  }
}

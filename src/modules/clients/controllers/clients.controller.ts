import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ClientsService } from '../services/clients.service';

@Controller('clients')
export class ClientsController {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly service: ClientsService) {}

  @Get('/todo')
  findAllStudent() {
    return this.service.findAll();
  }

  @Post('path')
  async create(@Body() body) {
    return await this.service.create(body);
  }

  @Post('register')
  async register(@Body() body) {
    return await this.service.create(body);
  }

  @Post('login')
  async login(@Body() body) {
    return this.service.validateUser(body.email, body.password);
  }

  @Put('path/:_id')
  async updateStudent(@Param('_id') id, @Body() body) {
    return await this.service.update(id, body);
  }

  @Delete('path/:_id')
  async deleteStudent(@Param('_id') id) {
    return await this.service.delete(id);
  }
}

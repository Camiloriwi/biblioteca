import { Injectable, HttpStatus, HttpException, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Clients } from '../entities/clients.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class ClientsService {
  // eslint-disable-next-line no-unused-vars
  constructor(@InjectModel(Clients.name) private clientModel: Model<Clients>) {}

  async findAll() {
    return await this.clientModel.find().exec();
  }

  async encryptPassword(password: string): Promise<string> {
    if (!password) {
      throw new Error('Password is required');
    }
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }
  

  async create(@Body() body): Promise<Clients> {
    body.password = await this.encryptPassword(body.password);
    const newClient = new this.clientModel(body);
    return await newClient.save();
  }

  async findByEmail(email: string): Promise<Clients> {
    return await this.clientModel.findOne({ email: email }).exec();
  }

  async validateUser(email: string, password: string) {
    const user = await this.findByEmail(email);
    if (!user) {
      throw new HttpException(
        'Invalid username or email',
        HttpStatus.BAD_REQUEST,
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new HttpException(
        'Invalid username or password',
        HttpStatus.BAD_REQUEST,
      );
    }

    const jwt_secret = 'mi_clave_secreta';

    const token = jwt.sign({ userId: user._id }, jwt_secret, {
      expiresIn: '1h',
    });
    return { message: 'Logged in successfully', token };
  }

  async update(id: string, body) {
    return await this.clientModel
      .findByIdAndUpdate(id, body, { new: true })
      .exec();
  }

  async delete(id: string) {
    return await this.clientModel.findByIdAndDelete(id).exec();
  }
}

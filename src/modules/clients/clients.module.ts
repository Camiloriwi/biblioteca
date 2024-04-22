import { Module } from '@nestjs/common';
import { ClientsController } from './controllers/clients.controller';
import { ClientsService } from './services/clients.service';
import { MongooseModule } from '@nestjs/mongoose';
import { clienSchema, Clients } from './entities/clients.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Clients.name,
        schema: clienSchema,
      },
    ]),
  ],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}

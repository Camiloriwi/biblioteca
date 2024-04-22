import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './modules/Books/books.module';
import { ClientsModule } from './modules/clients/clients.module';
import db_config from './librs/persistence/db_config';
import { PersistenceModule } from './librs/persistence';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [db_config],
      isGlobal: true,
    }),
    PersistenceModule,
    BooksModule,
    ClientsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

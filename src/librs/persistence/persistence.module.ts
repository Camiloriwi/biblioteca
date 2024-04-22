import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import db_config from './db_config';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (ConfigService: ConfigType<typeof db_config>) => {
        const { db, env } = ConfigService;
        const uriDB =
          env === 'local'
            ? `${db.connection}${db.host}${db.database}`
            : `mongodb+srv://${db.username}:${db.password}@filtro.xq3dxlh.mongodb.net/${db.database}?retryWrite=true&w=majority`;

        return {
          uri: uriDB,
        };
      },
      inject: [db_config.KEY],
    }),
  ],
})
export class PersistenceModule {}

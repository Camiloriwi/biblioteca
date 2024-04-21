import { registerAs } from '@nestjs/config';

export default registerAs('dbConfig', () => {
  const dbConfig = {
    db: {
      connection: process.env.DB_CONNECTION,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    env: process.env.NODE_ENV || 'local',
  };
  return dbConfig;
});

import { DataSource } from 'typeorm';
import { EnvConfig } from '../../../packages/config';

// Entities

export default new DataSource({
  type: EnvConfig.DATABASE_TYPE as any,
  host: EnvConfig.DATABASE_HOST,
  port: EnvConfig.DATABASE_PORT,
  username: EnvConfig.DATABASE_USER,
  password: EnvConfig.DATABASE_PASSWORD,
  database: EnvConfig.DATABASE_NAME,
  entities: [],
  synchronize: EnvConfig.DEVELOPMENT,
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
});
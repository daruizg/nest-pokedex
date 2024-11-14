import { EnvConfig } from './interfaces/env.config';

export const EnvConfiguration = (): EnvConfig => ({
  environment: process.env.NODE_ENV || 'development',
  mongodbConnectionString: process.env.MONGODB_CONNECTION_STRING,
  port: process.env.PORT,
  defaultLimit: +process.env.DEFAULT_LIMIT,
});

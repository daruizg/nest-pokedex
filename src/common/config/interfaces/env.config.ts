export interface EnvConfig {
  environment: string;
  mongodbConnectionString: string | undefined;
  port: string | number;
  defaultLimit: string | number;
}

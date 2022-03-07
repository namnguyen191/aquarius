export default () => ({
  app: {
    port: parseInt(process.env.APP_PORT, 10) || 3333,
  },
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    userName: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    db: process.env.DATABASE_PASSWORD_DB,
  },
});

export interface DatabaseConfig {
  host: string;
  port: number;
  userName: string;
  password: string;
  db: string;
}

export interface AppConfig {
  port: number;
}

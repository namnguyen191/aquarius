import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DatabaseConfig } from './env-config';

export const typeOrmConfigAsync = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  const dbConfig = configService.get<DatabaseConfig>('database');

  return {
    type: 'postgres',
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.userName,
    password: dbConfig.password,
    database: dbConfig.db,
    synchronize: true,
    autoLoadEntities: true,
  };
};

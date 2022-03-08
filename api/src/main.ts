import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfig } from './config/env-config';

async function bootstrap() {
  const logger = new Logger('Main entry');

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api');

  const configService = app.get(ConfigService);

  const appConfig = configService.get<AppConfig>('app');

  // Global pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  logger.log('Application started and is listening on port: ' + appConfig.port);
  await app.listen(appConfig.port);
}
bootstrap();

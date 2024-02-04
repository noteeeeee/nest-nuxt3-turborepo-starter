import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from '@nestjs/common';
import {initializeTransactionalContext} from "typeorm-transactional";
import {initTypeORMAddons} from "./common";

async function bootstrap() {
  initializeTransactionalContext();
  initTypeORMAddons();

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3001);
}

bootstrap();

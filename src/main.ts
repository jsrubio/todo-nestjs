import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cors from 'cors';
import * as express from 'express';

import { AppModule } from './app.module';

async function bootstrap() {
  const server = express();
  server.use(cors());
  
  const app = await NestFactory.create(AppModule, server);

  const options = new DocumentBuilder()
    .setTitle('TO DO List')
    .setDescription('To do lists - Simple API REST powered by NestJS')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/doc', app, document);

  await app.listen(3000);
}
bootstrap();

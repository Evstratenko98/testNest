import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const corsOptions = {
  origin: '*',
  methods: 'GET,PUT,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
};

const swaggerOptions = new DocumentBuilder()
  .addBearerAuth()
  .setTitle('Store APP')
  .setDescription('Store API documentation')
  .setVersion('1.0')
  .addTag('Store')
  .build();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = +process.env.APP_PORT || 3000;
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  app.enableCors(corsOptions);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();

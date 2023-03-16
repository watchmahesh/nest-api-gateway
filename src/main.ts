import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().setTitle('Demo API')
    .setDescription('A Demo API with CRUD functionality')
    .setVersion('1.0')
    .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
Logger.log(
  `\x1B[33m[Microservices]\x1B[39m is running on: \x1B[33m""\x1B[39m`
);
bootstrap().catch((err) => {
  Logger.error('Error loading application', err);
});

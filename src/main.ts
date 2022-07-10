import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AxiosErrorFilter } from './errors/axios.filter';

async function bootstrap() {
  if (!process.env.PORT || !process.env.USERS_API) {
    throw new Error('Provide PORT, USERS_API in .env file');
  }
  console.log(process.env.USERS_API);
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AxiosErrorFilter());
  await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();

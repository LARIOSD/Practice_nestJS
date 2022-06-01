import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
// import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(morgan('tiny'));
  const logger = new Logger();

  app.enableCors({origin: '*'})
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(4002);
  logger.log(`Server is running in ${await app.getUrl()}`);
}
bootstrap();

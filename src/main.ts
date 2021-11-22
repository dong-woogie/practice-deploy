import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('process env is ');
  console.log(process.env);
  await app.listen(process.env.PORT || 4000);
}
bootstrap();

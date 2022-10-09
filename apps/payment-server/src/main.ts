import { NestFactory } from '@nestjs/core';
import { PaymentServerModule } from './payment-server.module';

async function bootstrap() {
  const app = await NestFactory.create(PaymentServerModule);
  await app.listen(3001);
}
bootstrap();

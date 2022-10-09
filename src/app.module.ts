import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { PaymentService } from './payment/payment.service';

@Module({
  imports: [PaymentModule],
  controllers: [AppController],
  providers: [AppService, PaymentService],
})
export class AppModule {}

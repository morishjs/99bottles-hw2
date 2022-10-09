import { Controller, Post } from '@nestjs/common';
import { PaymentResult } from './payment/payment.service';

@Controller()
export class AppController {
  constructor() {}

  @Post('/pay')
  pay(): PaymentResult {
    // return this.paymentService.pay();
    return {} as PaymentResult;
  }
}

import { Controller, Post } from '@nestjs/common';
import { PaymentResult } from './payment/payment.service';

@Controller()
export class AppController {
  constructor() {}

  @Post('/pay')
  pay(): PaymentResult {
    // TODO: paymentService.pay 의 결과값을 리턴하도록 주석 해제
    // return this.paymentService.pay();
    return {} as PaymentResult;
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { PaymentResult } from './payment/payment.service';

export interface OrderRequestDto {
  purchase_amount: number;
  pg: 'toss' | 'kakaopay' | 'naverpay';
  timestamp: number;
}

@Controller()
export class AppController {
  constructor() {}

  @Post('/pay')
  pay(@Body() orderRequest: OrderRequestDto): PaymentResult {
    // TODO: paymentService.pay 의 결과값을 리턴하도록 주석 해제
    // return this.paymentService.pay(orderRequest);
    return {} as PaymentResult;
  }
}

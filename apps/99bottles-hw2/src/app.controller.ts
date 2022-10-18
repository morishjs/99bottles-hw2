import { Body, Controller, Post } from '@nestjs/common';
import { PaymentResult, PaymentService } from './payment/payment.service';

export interface OrderRequestDto {
  purchase_amount: number;
  pg: 'toss' | 'kakaopay' | 'naverpay';
  timestamp: number;
}

@Controller()
export class AppController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('/pay')
  pay(@Body() orderRequest: OrderRequestDto): PaymentResult {
    return this.paymentService.pay(orderRequest);
  }
}

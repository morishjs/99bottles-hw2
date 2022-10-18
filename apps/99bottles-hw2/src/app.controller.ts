import { Body, Controller, Post } from '@nestjs/common';
import { PaymentResult, PaymentService } from './payment/payment.service';

export interface OrderRequestDto {
  purchase_amount: number;
  pg: 'toss' | 'kakaopay' | 'naverpay';
  timestamp: number;
}

@Controller()
export class AppController {
  constructor(private paymentService: PaymentService) {}

  @Post('/pay')
  pay(@Body() orderRequest: OrderRequestDto): Promise<PaymentResult> {
    return this.paymentService.pay(orderRequest);
  }
}

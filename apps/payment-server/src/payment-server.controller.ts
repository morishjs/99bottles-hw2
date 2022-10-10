import { Body, Controller, Post } from '@nestjs/common';
import {
  KakaoPayResult,
  NaverPayResult,
  PaymentServerService,
  TossResult,
} from './payment-server.service';

interface Request {
  purchase_amount: number;
}

@Controller()
export class PaymentServerController {
  constructor(private readonly paymentServerService: PaymentServerService) {}

  @Post('/toss')
  toss(@Body() request: Request): TossResult {
    return this.paymentServerService.payByToss(request.purchase_amount);
  }

  @Post('/kakaopay')
  kakaoPay(@Body() request: Request): KakaoPayResult {
    return this.paymentServerService.payByKakaoPay(request.purchase_amount);
  }

  @Post('/naverpay')
  naverPay(@Body() request: Request): NaverPayResult {
    return this.paymentServerService.payByNaverPay(request.purchase_amount);
  }
}

import { Controller, Post } from '@nestjs/common';
import {
  KakaoPayResult,
  NaverPayResult,
  PaymentServerService,
  TossResult,
} from './payment-server.service';

@Controller()
export class PaymentServerController {
  constructor(private readonly paymentServerService: PaymentServerService) {}

  @Post()
  toss(): TossResult {
    return this.paymentServerService.payByToss();
  }

  @Post()
  kakaoPay(): KakaoPayResult {
    return this.paymentServerService.payByKakaoPay();
  }

  @Post()
  naverPay(): NaverPayResult {
    return this.paymentServerService.payByNaverPay();
  }
}

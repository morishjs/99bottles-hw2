import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { TossService } from './toss.service';
import { KakaoPayService } from './kakao-pay.service';
import { NaverPayService } from './naver-pay.service';

@Module({
  providers: [TossService, KakaoPayService, NaverPayService, PaymentService],
  exports: [PaymentService],
})
export class PaymentModule {}

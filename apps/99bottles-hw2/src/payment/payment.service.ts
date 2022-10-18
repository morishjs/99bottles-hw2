import { Injectable } from '@nestjs/common';
import { OrderRequestDto } from '../app.controller';
import { KakaoPayService } from './kakao-pay.service';
import { NaverPayService } from './naver-pay.service';
import { TossService } from './toss.service';

export interface PaymentResult {
  orderName: string;
  purchaseAmount: number;
}

export interface PaymentParams {
  purchase_amount: number;
}

@Injectable()
export class PaymentService {
  pay(request: OrderRequestDto): PaymentResult {
    let payment;

    switch (request.pg) {
      case 'toss':
        payment = new TossService();
        break;
      case 'kakaopay':
        payment = new KakaoPayService();
        break;
      case 'naverpay':
        payment = new NaverPayService();
        break;
    }

    return payment
      .pay({ purchase_amount: request.purchase_amount })
      .then((res) => res);
  }
}

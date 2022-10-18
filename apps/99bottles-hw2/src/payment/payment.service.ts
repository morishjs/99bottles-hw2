import { NaverPayService } from './naver-pay.service';
import { TossService } from './toss.service';
import { KakaoPayService } from './kakao-pay.service';
import { Injectable } from '@nestjs/common';
import { OrderRequestDto } from '../app.controller';

export interface PaymentResult {
  orderName: string;
  purchaseAmount: number;
}

@Injectable()
export class PaymentService {
  constructor(
    private readonly kakaopayService: KakaoPayService,
    private readonly tossService: TossService,
    private readonly naverpayService: NaverPayService,
  ) {}

  pay(request: OrderRequestDto): Promise<PaymentResult> {
    switch (request.pg) {
      case 'kakaopay':
        return this.kakaopayService.pay({
          pg: 'kakaopay',
          timestamp: Date.now(),
          purchase_amount: request.purchase_amount,
        });
        break;
      case 'toss':
        return this.tossService.pay({
          pg: 'toss',
          timestamp: Date.now(),
          purchase_amount: request.purchase_amount,
        });
        break;
      case 'naverpay':
        return this.naverpayService.pay({
          pg: 'naverpay',
          timestamp: Date.now(),
          purchase_amount: request.purchase_amount,
        });
        break;
    }
  }
}

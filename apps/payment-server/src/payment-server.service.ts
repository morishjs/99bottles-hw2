import { Injectable } from '@nestjs/common';

export interface TossResult {
  orderName: string;
  timestamp: number;
  purchaseAmount: number;
}

export interface NaverPayResult {
  order_name: string;
  timestamp: number;
  purchase_amount: number;
}

export interface KakaoPayResult {
  OrderName: string;
  Timestamp: number;
  PurchaseAmount: number;
}

@Injectable()
export class PaymentServerService {
  payByToss(purchaseAmount: number): TossResult {
    return {
      orderName: 'Toss',
      timestamp: Date.now(),
      purchaseAmount: purchaseAmount,
    };
  }

  payByKakaoPay(purchaseAmount: number): KakaoPayResult {
    return {
      OrderName: 'Kakao',
      Timestamp: Date.now(),
      PurchaseAmount: purchaseAmount,
    };
  }
  payByNaverPay(purchaseAmount: number): NaverPayResult {
    return {
      order_name: 'Naver',
      timestamp: Date.now(),
      purchase_amount: purchaseAmount,
    };
  }
}

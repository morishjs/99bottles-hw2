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
  payByToss(): TossResult {
    return {
      orderName: 'Toss',
      timestamp: Date.now(),
      purchaseAmount: 50000,
    };
  }

  payByKakaoPay(): KakaoPayResult {
    return {
      OrderName: 'Kakao',
      Timestamp: Date.now(),
      PurchaseAmount: 50000,
    };
  }
  payByNaverPay(): NaverPayResult {
    return {
      order_name: 'Naver',
      timestamp: Date.now(),
      purchase_amount: 50000,
    };
  }
}

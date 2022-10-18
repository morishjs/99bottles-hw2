import { Injectable } from '@nestjs/common';
import { PaymentParams, PaymentResult } from './payment.service';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class KakaoPayService {
  async pay(data: PaymentParams): Promise<PaymentResult> {
    const res = await new HttpService().axiosRef.post(
      'http://localhost:3001/kakaopay',
      {
        purchase_amount: data.purchase_amount,
      },
    );
    return {
      orderName: res.data.OrderName.toLowerCase(),
      purchaseAmount: res.data.PurchaseAmount,
    };
  }
}

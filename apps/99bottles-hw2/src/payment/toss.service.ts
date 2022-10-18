import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PaymentParams, PaymentResult } from './payment.service';

@Injectable()
export class TossService {
  async pay(data: PaymentParams): Promise<PaymentResult> {
    const res = await new HttpService().axiosRef.post(
      'http://localhost:3001/toss',
      {
        purchase_amount: data.purchase_amount,
      },
    );
    return {
      orderName: res.data.orderName.toLowerCase(),
      purchaseAmount: res.data.purchaseAmount,
    };
  }
}

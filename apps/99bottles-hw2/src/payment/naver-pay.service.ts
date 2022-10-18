import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PaymentParams, PaymentResult } from './payment.service';

@Injectable()
export class NaverPayService {
  async pay(data: PaymentParams): Promise<PaymentResult> {
    const res = await new HttpService().axiosRef.post(
      'http://localhost:3001/naverpay',
      {
        purchase_amount: data.purchase_amount,
      },
    );
    return {
      orderName: res.data.order_name.toLowerCase(),
      purchaseAmount: res.data.purchase_amount,
    };
  }
}

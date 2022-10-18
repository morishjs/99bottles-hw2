import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { OrderRequestDto } from '../app.controller';
import { PaymentResult } from './payment.service';

@Injectable()
export class KakaoPayService {
  async pay(request: OrderRequestDto): Promise<PaymentResult> {
    const response = await new HttpService().axiosRef.post(
      'http://localhost:3001/kakaopay',
      {
        purchase_amount: request.purchase_amount,
      },
    );

    return {
      orderName: response.data.orderName,
      purchaseAmount: response.data.purchaseAmount,
    };
  }
}

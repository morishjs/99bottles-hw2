import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { OrderRequestDto } from '../app.controller';
import { PaymentResult } from './payment.service';

@Injectable()
export class TossService {
  async pay(request: OrderRequestDto): Promise<PaymentResult> {
    const response = await new HttpService().axiosRef.post(
      'http://localhost:3001/toss',
      {
        purchase_amount: request.purchase_amount,
      },
    );
    return {
      orderName: response.data.orderName.toLowerCase(),
      purchaseAmount: response.data.purchaseAmount,
    };
  }
}

import { OrderRequestDto } from './../app.controller';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PaymentResult } from './payment.service';

@Injectable()
export class NaverPayService {
  async pay(request: OrderRequestDto): Promise<PaymentResult> {
    const response = await new HttpService().axiosRef.post(
      'http://localhost:3001/naverpay',
      {
        purchase_amount: request.purchase_amount,
      },
    );
    return {
      orderName: response.data.order_name.toLowerCase(),
      purchaseAmount: response.data.purchase_amount,
    };
  }
}

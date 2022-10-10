import { Injectable } from '@nestjs/common';
import { OrderRequestDto } from '../app.controller';

export interface PaymentResult {
  orderName: string;
  purchaseAmount: number;
}

@Injectable()
export class PaymentService {
  pay(request: OrderRequestDto): PaymentResult {
    return {} as PaymentResult;
  }
}

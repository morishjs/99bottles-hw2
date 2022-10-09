import { Injectable } from '@nestjs/common';

export interface PaymentResult {}

@Injectable()
export class PaymentService {
  pay(): PaymentResult {
    return 'hello world';
  }
}

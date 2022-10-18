import { Test, TestingModule } from '@nestjs/testing';
import { PaymentService } from './payment.service';

describe('PaymentService', () => {
  let service: PaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentService],
    }).compile();

    service = module.get<PaymentService>(PaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return pay result', async () => {
    const result = await service.pay({
      pg: 'toss',
      timestamp: Date.now(),
      purchase_amount: 10000,
    });
    expect(result).toStrictEqual({
      orderName: 'toss',
      purchaseAmount: 10000,
    });
  });
});

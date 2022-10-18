import { Test, TestingModule } from '@nestjs/testing';
import { TossService } from './toss.service';

describe('TossService', () => {
  let service: TossService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TossService],
    }).compile();

    service = module.get<TossService>(TossService);
  });

  it('should be return toss result', () => {
    expect(
      service.pay({
        pg: 'toss',
        timestamp: Date.now(),
        purchase_amount: 10000,
      }),
    ).toBe({
      orderName: 'toss',
      purchaseAmount: 10000,
    });
  });
});

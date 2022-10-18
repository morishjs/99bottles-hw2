import { Test, TestingModule } from '@nestjs/testing';
import { NaverPayService } from './naver-pay.service';

describe('NaverPayService', () => {
  let service: NaverPayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NaverPayService],
    }).compile();

    service = module.get<NaverPayService>(NaverPayService);
  });

  it('should be return naverpay result', () => {
    expect(
      service.pay({
        pg: 'naverpay',
        timestamp: Date.now(),
        purchase_amount: 10000,
      }),
    ).toBe({
      orderName: 'naverpay',
      purchaseAmount: 10000,
    });
  });
});

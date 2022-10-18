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

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return appropriately modified response', async () => {
    const result = await service.pay({
      purchase_amount: 10000,
    });
    expect(result).toStrictEqual({
      orderName: 'naver',
      purchaseAmount: 10000,
    });
  });
});

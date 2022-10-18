import { Test, TestingModule } from '@nestjs/testing';
import { KakaoPayService } from './kakao-pay.service';

describe('KakaoPayService', () => {
  let service: KakaoPayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KakaoPayService],
    }).compile();

    service = module.get<KakaoPayService>(KakaoPayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return appropriately modified response', async () => {
    const result = await service.pay({
      purchase_amount: 10000,
    });

    expect(result).toStrictEqual({
      orderName: 'kakao',
      purchaseAmount: 10000,
    });
  });
});

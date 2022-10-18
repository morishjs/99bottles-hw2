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

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return pay result', async () => {
    const result = await service.pay({
      purchase_amount: 10000,
    });
    expect(result).toStrictEqual({
      orderName: 'toss',
      purchaseAmount: 10000,
    });
  });
});

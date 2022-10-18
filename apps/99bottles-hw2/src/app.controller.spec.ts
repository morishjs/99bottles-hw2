import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { PaymentService } from './payment/payment.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [PaymentModule],
      controllers: [AppController],
      providers: [AppService, PaymentService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return pay result', async () => {
      const result = await appController.pay({
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
});

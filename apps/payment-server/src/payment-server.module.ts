import { Module } from '@nestjs/common';
import { PaymentServerController } from './payment-server.controller';
import { PaymentServerService } from './payment-server.service';

@Module({
  imports: [],
  controllers: [PaymentServerController],
  providers: [PaymentServerService],
})
export class PaymentServerModule {}

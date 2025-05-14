import { Module } from "@nestjs/common";
import { PaymentController } from "../infra/controllers/Payment.controller";
import { TransbankService } from "../infra/adapters/transbank/TransbankService";
import { TransbankAdapter } from "../infra/adapters/transbank/TransbankAdapter";
import { CreatePaymentUseCase } from "../app/use-cases/CreatePaymentUseCase";

@Module({
controllers: [PaymentController],
providers: [
    TransbankService,
    TransbankAdapter,
    {
    provide: 'PaymentPort',
    useExisting: TransbankAdapter,
    },
    CreatePaymentUseCase,
],
})
export class PaymentsModule {}

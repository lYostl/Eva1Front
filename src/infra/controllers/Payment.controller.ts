import { Body, Controller, Get, Logger, Post, Query } from "@nestjs/common";
import { CreatePaymentUseCase } from "../../app/use-cases/CreatePaymentUseCase";

@Controller('payment')
export class PaymentController {
private readonly logger = new Logger(PaymentController.name);

constructor(
    private readonly createPayment: CreatePaymentUseCase
) {}

@Post()
async create(@Body() body: any) {
    try {
    return await this.createPayment.execute({
        amount: body.amount,
        buyOrder: body.buyOrder,
        sessionId: body.sessionId,
        returnUrl: body.returnUrl,
    });
    } catch (error) {
    this.logger.error('Error creating payment', error.stack);
    throw new Error('Error creating payment');
    }
}

@Get('confirm')
async confirm(@Query('token_ws') token: string) {
    this.logger.log(`Confirmando pago con token: ${token}`);
    return { message: 'Confirmación recibida correctamente', token };
}
}

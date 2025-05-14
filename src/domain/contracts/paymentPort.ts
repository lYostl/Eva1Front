
export interface PaymentPort {
    createTransaction(input: {
    amount: number;
    buyOrder: string;
    sessionId: string;
    returnUrl: string;
    }): Promise<any>;
}

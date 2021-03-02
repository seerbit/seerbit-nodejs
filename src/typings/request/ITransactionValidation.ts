declare namespace ITransactionValidation{
    export interface VerifyPaymentRequest {
        paymentReference: string,
        publicKey?: string,
        query?: string,
    }

    interface Payments {
        redirectLink: string;
        amount: number;
        email: string;
        mobilenumber: string;
        publicKey: string;
        paymentType: string;
        productId: string;
        productDescription: string;
        maskedPan: string;
        gatewayMessage: string;
        gatewayCode: string;
        gatewayref: string;
        mode: string;
        callbackurl: string;
        redirecturl: string;
        channelType: string;
        sourceIP: string;
        deviceType: string;
        cardBin: string;
        lastFourDigits: string;
        type: string;
        country: string;
        currency: string;
        paymentReference: string;
        processorCode: string;
        processorMessage: string;
        reason: string;
    }

    interface Customers {
        customerName: string;
        customerMobile: string;
        customerEmail: string;
        customerId: string;
        fee: string;
    }
    export interface VerifyPaymentResponse {
        code: string,
        payments: Payments,
        message: string,
        customers: Customers
    }
}

declare namespace IRecurring{
    export interface CreateRequest {
        amount: string,
        cardNumber: string,
        cardName?: string,
        expiryMonth: string,
        expiryYear: string,
        cvv: string,
        callbackUrl: string,
        billingCycle: string,
        subscriptionAmount?: string,
        billingPeriod: string,
        country: string,
        currency: string,
        startDate: string,
        paymentReference: string,
        email: string,
        planId?: string,
        mobileNumber?: string,
        customerId?: string,
        productDescription?: string | null,
        productId?: string | null,
        publicKey?: string
    }

    export interface ChargeRequest {
        amount: string,
        authorizationCode: string,
        currency: string,
        email: string,
        paymentReference: string,
        publicKey?: string
    }

    export interface UpdateRequest {
        amount: string,
        mobileNumber: string,
        country: string,
        currency: string,
        status: string,
        publicKey?: string
    }

    export interface Response {
        code: string,
        payments: {},
        message: string,
    }

    export interface UpdateResponse {
        code: string,
        subscriptions: {},
        message: string,
    }

    export interface GetSubscriptionRequest {
        customerId?: string,
        query?: string,
        publicKey?: string,
    }

    export interface GetSubscriptionsResponse {
        code: string,
        subscriptions: Array<{publicKey: string, amount: string, country: string, customerId: string, cardName: string, cardNumber: string, plan: string, status: string, billingId:string, authorizationCode: string, startDate: string, createdAt: number}>,
        message?: string,
    }

    export interface SubscriptionStatusRequest {
        billingId: string,
        query?: string,
        publicKey?: string,
    }

    export interface GetSubscriptionStatusResponse {
        code: string,
        subscriptions: {publicKey: string, amount: string, country: string, customerId: string, cardName: string, cardNumber: string, plan: string, status: string, billingId:string, authorizationCode: string, startDate: string, createdAt: number},
        message?: string,
    }
}

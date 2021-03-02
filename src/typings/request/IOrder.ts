declare namespace IOrder{
    export interface CreateOrderBeforeRequest {
        amount: string,
        orderId: string,
        orderType?: string,
        orders: Array<{amount: string, productId: string, productDescription: string, currency: string}>,
        fullName?: string,
        fee?: string,
        country: string,
        currency: string,
        startDate: string,
        paymentReference: string,
        email: string,
        mobileNumber?: string,
        productDescription?: string | null,
        productId?: string | null,
        publicKey?: string
    }

    export interface CreateOrderAfterRequest {
        paymentReference: string,
        orders: Array<{amount: string, productId: string, productDescription: string, currency: string}>,
        publicKey?: string
    }

    export interface GetOrdersRequest {
        publicKey?: string;
        query?: string;
    }

    export interface GetOrdersByReferenceRequest {
        paymentReference: string
        publicKey?: string
        query?: string
    }

    export interface Response {
        code: string,
        payments: {},
        message: string,
    }

    export interface GetOrdersResponse {
        code: string,
        products: Array<{amount: string, productId: string, productDescription: string, currency: string}>,
        message: string,
    }

    export interface ResponseBeforePayment {
        code: string,
        products: Array<{amount: string, productId: string, productDescription: string, currency: string, paymentReference: string, orderId: string, createdAt: string, updatedAt: string}>,
        message: string,
    }
}

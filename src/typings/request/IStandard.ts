declare namespace IStandard{
    export interface InitializeRequest {
        amount: string,
        callbackUrl: string,
        redirectLink ?: string,
        country: string,
        currency: string,
        email: string,
        paymentReference: string,
        productDescription?: string | null,
        productId?: string | null,
        hash: string,
        hashType?: string,
        publicKey?: string
    }

    export interface InitializeResponse {
        code: string,
        payments: {},
        message: string,
    }
}

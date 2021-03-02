declare namespace IMobileMoney{
    export interface InitializeRequest {
        amount: string,
        deviceType?: string,
        fullName?: string,
        fee?: string,
        mobileNumber: string,
        paymentType?: string,
        sourceIP?: string,
        invoiceNumber?: string,
        network: string,
        voucherCode?: string,
        country: string,
        currency: string,
        email: string,
        paymentReference: string,
        productDescription?: string | null,
        productId?: string | null,
        publicKey?: string
    }

    export interface GetNetworksRequest {
        publicKey?: string
    }

    export interface InitializeResponse {
        code: string,
        payments: {},
        message: string,
    }

    export interface GetNetworksResponse {
        code: string,
        networks: Array<{networks: string, uniqueKey: string, status: string, voucherCode:boolean }>,
        message: string,
    }
}

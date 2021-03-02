declare namespace ICard{
    export interface AuthorizePreAuthRequest {
        amount: string | number,
        cardNumber: string,
        cvv ?: string,
        expiryMonth: string,
        expiryYear: string,
        country: string,
        currency: string,
        email: string,
        fullName?: string,
        paymentReference: string,
        productDescription?: string | null,
        productId?: string | null,
        publicKey?: string
        cardToken?: string
    }

    export interface TokenizeCardRequest {
        amount: string | number,
        cardNumber: string,
        cvv ?: string,
        expiryMonth: string,
        expiryYear: string,
        country: string,
        currency: string,
        email: string,
        fullName?: string,
        paymentReference: string,
        productDescription?: string | null,
        productId?: string | null,
        publicKey?: string
        cardToken?: string
        pin?: string
    }

    export interface AuthorizePreAuthRequestWithToken {
        amount: string | number,
        country: string,
        currency: string,
        email: string,
        fullName?: string,
        paymentReference: string,
        productDescription?: string | null,
        productId?: string | null,
        publicKey?: string
        cardToken: string
    }

    export interface CapturePreAuthRequest {
        /**
         * Authorized Amount.
         */
        amount: string | number,
        /**
         * Country Code.
         */
        country: string,
        /**
         * Currency Code.
         */
        currency: string,
        /**
         * Payment or Transaction Reference.
         */
        paymentReference: string,
        /**
         * Product Description.
         * * optional
         */
        productDescription?: string | null,
        /**
         * Product ID.
         * * optional
         */
        productId?: string | null,

        publicKey?: string
    }

    export interface CancelPreAuthRequest {
        paymentReference: string,
        country: string,
        productDescription?: string | null,
        productId?: string | null,
        publicKey?: string
    }

    export interface RefundPreAuthRequest {
        paymentReference: string,
        country: string,
        currency: string,
        productDescription?: string | null,
        productId?: string | null,
        publicKey?: string
    }

    export interface Response {
        code: string,
        payments: {},
        message: string,
    }
}

declare namespace IAccount{
    export interface BankListRequest {
        publicKey?: string;
        query?: string
    }

    interface RequiredFields {
        accountName: string;
        accountNumber: string;
        isBankCode: string;
        bvn: string;
        dateOfBirth: string;
        mobileNumber: string;
    }
    export interface BankListResponse {
        code: string,
        merchantBanks: Array<{bankName: string, bankCode: string, url: string, logo: string, status: string, minimumAmount:string, requiredFields: RequiredFields}>,
        message: string,
    }

}

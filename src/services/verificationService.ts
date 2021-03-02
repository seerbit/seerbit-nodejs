import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Service from "../service";
import VerifyPayment from "./resource/standard/verifyPayment";

class VerificationService extends Service {
    private readonly _verifyPayment: VerifyPayment;

    public constructor(client: Client) {
        super(client);
        this._verifyPayment = new VerifyPayment(this);
    }

    public Verify(requestPayload: ITransactionValidation.VerifyPaymentRequest): Promise<ITransactionValidation.VerifyPaymentResponse>{
        requestPayload.publicKey = this.client.config.publicKey;
        requestPayload.query = requestPayload.paymentReference;

        return getJsonResponse<ITransactionValidation.VerifyPaymentRequest, ITransactionValidation.VerifyPaymentResponse>(
            this._verifyPayment,
            requestPayload,
            { isTokenRequired: true, isPost: false }
        );
    }



}

export default VerificationService;

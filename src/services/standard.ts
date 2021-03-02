import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import InitializeStandardTransaction from "./resource/standard/initializeStandardTransaction";
import Service from "../service";
import crypto from "crypto";

class Standard extends Service {
    private readonly _initializeStandardTransaction: InitializeStandardTransaction;

    public constructor(client: Client) {
        super(client);
        this._initializeStandardTransaction = new InitializeStandardTransaction(this);
    }

    public Initialize(requestPayload: IStandard.InitializeRequest): Promise<IStandard.InitializeResponse>{
        requestPayload = this.ensurePayloadIsComplete(requestPayload);
        let buildStringToHash = "";
        for (const pl in requestPayload){
            buildStringToHash += pl + "=" + requestPayload[ pl ] + "&";
        }
        const stringToHash = buildStringToHash.substr(0,buildStringToHash.length-1) + this.client.config.secretKey

        requestPayload.hash = crypto.createHash("sha256").update(stringToHash).digest("hex")
        requestPayload.hashType = "sha256";
        return getJsonResponse<IStandard.InitializeRequest, IStandard.InitializeResponse>(
            this._initializeStandardTransaction,
            requestPayload,
            { isTokenRequired: true, isPost: true }
            );
    }

    private ensurePayloadIsComplete(requestPayload: IStandard.InitializeRequest){
        if (!Object.prototype.hasOwnProperty.call(requestPayload,"productDescription")) {
            requestPayload.productDescription = null;
        }

        if (!Object.prototype.hasOwnProperty.call(requestPayload,"productId")) {
            requestPayload.productId = null;
        }
        requestPayload.publicKey = this.client.config.publicKey;
        return requestPayload;
    }

}

export default Standard;

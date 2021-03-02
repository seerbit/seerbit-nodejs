import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import MomoPayment from "./resource/momo/momoPayment";
import MomoNetworks from "./resource/momo/momoNetworks";
import Service from "../service";

class Momo extends Service {
    private readonly _momoPayment: MomoPayment;
    private readonly _momoNetworks: MomoNetworks;

    public constructor(client: Client) {
        super(client);
        this._momoPayment = new MomoPayment(this);
        this._momoNetworks = new MomoNetworks(this);
    }

    public InitializeTransaction(requestPayload: IMobileMoney.InitializeRequest): Promise<IMobileMoney.InitializeResponse>{
        requestPayload.publicKey = this.client.config.publicKey;
        requestPayload.paymentType = "MOMO";

        return getJsonResponse<IMobileMoney.InitializeRequest, IMobileMoney.InitializeResponse>(
            this._momoPayment,
            requestPayload,
            { isTokenRequired: true, isPost:true }
        );
    }

    public MobileMoneyNetworks(requestPayload: IMobileMoney.GetNetworksRequest = {}): Promise<IMobileMoney.GetNetworksResponse>{
        return getJsonResponse<IMobileMoney.GetNetworksRequest, IMobileMoney.GetNetworksResponse>(
            this._momoNetworks,
            requestPayload,
            { isTokenRequired: true, isPost:false }
        );
    }



}

export default Momo;

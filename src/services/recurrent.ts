import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import CreateSubscription from "./resource/recurrent/createSubscription";
import ChargeSubscription from "./resource/recurrent/chargeSubscription";
import UpdateSubscription from "./resource/recurrent/updateSubscription";
import GetSubscriptions from "./resource/recurrent/getSubscriptions";
import CheckSubscriptionStatus from "./resource/recurrent/checkSubscriptionStatus";

import Service from "../service";

class Recurrent extends Service {
    private readonly _createSubscription: CreateSubscription;
    private readonly _chargeSubscription: ChargeSubscription;
    private readonly _updateSubscription: UpdateSubscription;
    private readonly _getSubscriptions: GetSubscriptions;
    private readonly _checkSubscriptionStatus: CheckSubscriptionStatus;

    public constructor(client: Client) {
        super(client);
        this._createSubscription = new CreateSubscription(this);
        this._chargeSubscription = new ChargeSubscription(this);
        this._updateSubscription = new UpdateSubscription(this);
        this._getSubscriptions = new GetSubscriptions(this);
        this._checkSubscriptionStatus = new CheckSubscriptionStatus(this);
    }

    public CreateRecurringSubscription(requestPayload: IRecurring.CreateRequest): Promise<IRecurring.Response>{
        requestPayload.publicKey = this.client.config.publicKey;

        return getJsonResponse<IRecurring.CreateRequest, IRecurring.Response>(
            this._createSubscription,
            requestPayload,
            { isTokenRequired: true, isPost:true }
        );
    }

    public ChargeRecurringSubscription(requestPayload: IRecurring.ChargeRequest): Promise<IRecurring.Response>{
        requestPayload.publicKey = this.client.config.publicKey;

        return getJsonResponse<IRecurring.ChargeRequest, IRecurring.Response>(
            this._chargeSubscription,
            requestPayload,
            { isTokenRequired: true, isPost: true }
        );
    }

    public UpdateRecurringSubscription(requestPayload: IRecurring.UpdateRequest): Promise<IRecurring.UpdateResponse>{
        requestPayload.publicKey = this.client.config.publicKey;

        return getJsonResponse<IRecurring.UpdateRequest, IRecurring.UpdateResponse>(
            this._updateSubscription,
            requestPayload,
            { isTokenRequired: true }
        );
    }

    public GetSubscriptions(requestPayload: IRecurring.GetSubscriptionRequest = { }): Promise<IRecurring.GetSubscriptionsResponse>{
        requestPayload.query =  this.client.config.publicKey;
        return getJsonResponse<IRecurring.GetSubscriptionRequest, IRecurring.GetSubscriptionsResponse>(
            this._getSubscriptions,
            requestPayload,
            { isTokenRequired: true , isPost: false }
        );
    }

    public GetCustomerSubscriptions(requestPayload: IRecurring.GetSubscriptionRequest): Promise<IRecurring.GetSubscriptionsResponse>{
        requestPayload.publicKey = this.client.config.publicKey;
        requestPayload.query =  this.client.config.publicKey+"/customerId/"+requestPayload.customerId;
        return getJsonResponse<IRecurring.GetSubscriptionRequest, IRecurring.GetSubscriptionsResponse>(
            this._getSubscriptions,
            requestPayload,
            { isTokenRequired: true , isPost: false }
        );
    }

    public CheckSubscriptionStatus(requestPayload: IRecurring.SubscriptionStatusRequest): Promise<IRecurring.GetSubscriptionStatusResponse>{
        requestPayload.publicKey = this.client.config.publicKey;
        requestPayload.query =  requestPayload.billingId;
        return getJsonResponse<IRecurring.SubscriptionStatusRequest, IRecurring.GetSubscriptionStatusResponse>(
            this._checkSubscriptionStatus,
            requestPayload,
            { isTokenRequired: true , isPost: false }
        );
    }



}

export default Recurrent;

import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import CreateOrderAfterPayment from "./resource/order/createOrderAfterPayment";
import CreateOrderBeforePayment from "./resource/order/createOrderBeforePayment";
import GetOrdersByPublicKey from "./resource/order/getOrdersByPublicKey";

import Service from "../service";

class Order extends Service {
    private readonly _createOrderAfterPayment: CreateOrderAfterPayment;
    private readonly _createOrderBeforePayment: CreateOrderBeforePayment;
    private readonly _getOrdersByPublicKey: GetOrdersByPublicKey;

    public constructor(client: Client) {
        super(client);
        this._createOrderAfterPayment = new CreateOrderAfterPayment(this);
        this._createOrderBeforePayment = new CreateOrderBeforePayment(this);
        this._getOrdersByPublicKey = new GetOrdersByPublicKey(this);
    }

    public CreateOrderAfterPayment(requestPayload: IOrder.CreateOrderAfterRequest): Promise<IOrder.Response>{
        requestPayload.publicKey = this.client.config.publicKey;

        return getJsonResponse<IOrder.CreateOrderAfterRequest, IOrder.Response>(
            this._createOrderAfterPayment,
            requestPayload,
            { isTokenRequired: true, isPost:true }
        );
    }

    public CreateOrderBeforePayment(requestPayload: IOrder.CreateOrderBeforeRequest): Promise<IOrder.ResponseBeforePayment>{
        requestPayload.publicKey = this.client.config.publicKey;

        return getJsonResponse<IOrder.CreateOrderBeforeRequest, IOrder.ResponseBeforePayment>(
            this._createOrderBeforePayment,
            requestPayload,
            { isTokenRequired: true, isPost:true }
        );
    }
    public GetOrders(requestPayload: IOrder.GetOrdersRequest = { }): Promise<IOrder.GetOrdersResponse>{
        requestPayload.publicKey = this.client.config.publicKey;
        requestPayload.query = this.client.config.publicKey;
        return getJsonResponse<IOrder.GetOrdersRequest, IOrder.GetOrdersResponse>(
            this._getOrdersByPublicKey,
            requestPayload,
            { isTokenRequired: true, isPost:false }
        );
    }

    public GetOrderByReference(requestPayload: IOrder.GetOrdersByReferenceRequest): Promise<IOrder.GetOrdersResponse>{
        requestPayload.publicKey = this.client.config.publicKey;
        requestPayload.query = this.client.config.publicKey+"/paymentReference/"+requestPayload.paymentReference;

        return getJsonResponse<IOrder.GetOrdersByReferenceRequest, IOrder.GetOrdersResponse>(
            this._getOrdersByPublicKey,
            requestPayload,
            { isTokenRequired: true, isPost:false }
        );
    }


}

export default Order;

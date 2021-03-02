import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import BankList from "./resource/account/bankList";

import Service from "../service";

class Recurrent extends Service {
    private readonly _bankList: BankList;

    public constructor(client: Client) {
        super(client);
        this._bankList = new BankList(this);
    }

    public BanksList(requestPayload: IAccount.BankListRequest = { }): Promise<IAccount.BankListResponse>{
        requestPayload.query = this.client.config.publicKey;
        return getJsonResponse<IAccount.BankListRequest, IAccount.BankListResponse>(
            this._bankList,
            requestPayload,
            { isTokenRequired: true , isPost: false }
        );
    }

}

export default Recurrent;

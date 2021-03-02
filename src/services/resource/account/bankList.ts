import Resource from "../../resource";
import Service from "../../../service";

class BankList extends Resource{
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}banks/merchant/`
        );
    }
}

export default BankList;

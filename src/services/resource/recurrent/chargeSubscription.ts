import Resource from "../../resource";
import Service from "../../../service";

class ChargeSubscription extends Resource{
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}recurring/charge`
        );
    };
};

export default ChargeSubscription;

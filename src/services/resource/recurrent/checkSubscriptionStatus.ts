import Resource from "../../resource";
import Service from "../../../service";

class CheckSubscriptionStatus extends Resource{
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}recurring/billingId/`
        );
    }
}

export default CheckSubscriptionStatus;

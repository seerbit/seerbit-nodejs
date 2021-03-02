import Resource from "../../resource";
import Service from "../../../service";

class CancelPreAuth extends Resource{
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}payments/cancel`
        );
    }
}

export default CancelPreAuth;

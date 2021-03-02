import Resource from "../../resource";
import Service from "../../../service";

class MomoPayment extends Resource{
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}payments/initiates`
        );
    }
}

export default MomoPayment;

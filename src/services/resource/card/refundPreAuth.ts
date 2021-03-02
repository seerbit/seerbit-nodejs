import Resource from "../../resource";
import Service from "../../../service";

class RefundPreAuth extends Resource{
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}payments/refund`
        );
    }
}

export default RefundPreAuth;

import Resource from "../../resource";
import Service from "../../../service";

class VerifyPayment extends Resource{
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}payments/query/`
        );
    }
}

export default VerifyPayment;

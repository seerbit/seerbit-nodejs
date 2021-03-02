import Resource from "../../resource";
import Service from "../../../service";

class Non3DSAuth extends Resource{
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}payments/charge`
        );
    }
}

export default Non3DSAuth;

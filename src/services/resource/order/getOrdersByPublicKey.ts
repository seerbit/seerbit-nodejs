import Resource from "../../resource";
import Service from "../../../service";

class GetOrdersByPublicKey extends Resource{
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}products/orders/publicKey/`
        );
    };
};

export default GetOrdersByPublicKey;

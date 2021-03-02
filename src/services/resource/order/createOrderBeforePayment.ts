import Resource from "../../resource";
import Service from "../../../service";

class CreateOrderAfterPayment extends Resource{
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}payments/order`
        );
    };
};

export default CreateOrderAfterPayment;

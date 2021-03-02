import Resource from "../../resource";
import Service from "../../../service";

class InitializeStandardTransaction extends Resource{
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}payments`
        );
    };
};

export default InitializeStandardTransaction;

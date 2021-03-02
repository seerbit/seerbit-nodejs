import Resource from "../../resource";
import Service from "../../../service";

class CreateSubscription extends Resource{
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}recurring/subscribes`
        );
    };
};

export default CreateSubscription;

import Resource from "../../resource";
import Service from "../../../service";

class UpdateSubscription extends Resource{
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}recurring/updates`
        );
    };
};

export default UpdateSubscription;

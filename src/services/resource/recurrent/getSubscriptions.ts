import Resource from "../../resource";
import Service from "../../../service";

class GetSubscriptions extends Resource{
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}recurring/publicKey/`
        );
    }
}

export default GetSubscriptions;

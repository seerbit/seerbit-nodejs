import Resource from "../../resource";
import Service from "../../../service";

class AuthorizePreAuth extends Resource{

    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}payments/authorise`
        );
    }
}

export default AuthorizePreAuth;

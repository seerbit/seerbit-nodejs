import Resource from "../../resource";
import Service from "../../../service";

class Auth3DS extends Resource{
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}payments/authorise3ds`
        );
    }
}

export default Auth3DS;

import Resource from "../../resource";
import Service from "../../../service";

class TokenizeCard extends Resource{
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}payments/tokenize`
        );
    }
}

export default TokenizeCard;

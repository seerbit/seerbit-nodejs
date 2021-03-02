import Resource from "../../resource";
import Service from "../../../service";

class MomoNetworks extends Resource{
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}networks`
        );
    }
}

export default MomoNetworks;

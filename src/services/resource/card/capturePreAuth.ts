import Resource from "../../resource";
import Service from "../../../service";

class CapturePreAuth extends Resource{
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}payments/capture`
        );
    }
}

export default CapturePreAuth;


import Config from "../config";
import HttpClientException from "../httpClient/httpClientException";
import ApiException from "./exception/apiException";
import ClientInterface from "../httpClient/clientInterface";
import {IRequest} from "../typings/requestOptions";
import Service from "../service";

abstract class Resource {
    protected endpoint: string;
    private service: Service;

    protected constructor(service: Service, endpoint: string) {
        this.service = service;
        this.endpoint = endpoint;
    }

    public request(json: string, requestOptions?: IRequest.Options): Promise<string | HttpClientException | ApiException> {
        const clientInterface: ClientInterface = this.service.client.httpClient;
        const config: Config = this.service.client.config;

        return clientInterface.request(
            this.endpoint,
            json, config,
            requestOptions,
        );
    }

}

export default Resource;

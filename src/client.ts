import Config from "./config";
import HttpURLConnectionClient from "./httpClient/httpURLConnectionClient";
import ClientInterface from "./httpClient/clientInterface";


// interface ClientParameters {
//     config?: Config;
//     environment?: Environment;
//     publicKey: string;
//     secretKey: string;
//     httpClient?: ClientInterface;
// }

class Client {
    //DEFINE BASE URLS
    public static ENDPOINT_PILOT = "https://pilot-backend.seerbitapi.com/v2/";
    public static ENDPOINT_LIVE = "https://seerbitapi.com/api/v2/";

    private _httpClient!: ClientInterface;
    public config: Config;

    public constructor(config: Config) {
        this.config = config;
        const environment = config.environment;
        if (environment) {
            this.setEnvironment(environment);
        }else {
            this.setEnvironment("LIVE");
        }

        if (config.httpClient) {
            this._httpClient = config.httpClient;
        }
    }

    public setEnvironment(environment: Environment): void {
        if (environment === "PILOT") {
            this.config.endpoint = Client.ENDPOINT_PILOT;
        } else if (environment === "LIVE") {
            this.config.endpoint = Client.ENDPOINT_LIVE;
        }else{
            this.config.endpoint = Client.ENDPOINT_LIVE;
        }
    }

    public get httpClient(): ClientInterface {
        if (!this._httpClient) {
            this._httpClient = new HttpURLConnectionClient();
        }

        return this._httpClient;
    }

    public set httpClient(httpClient: ClientInterface) {
        this._httpClient = httpClient;
    }

    public setTimeouts(connectionTimeoutMillis: number, readTimeoutMillis: number): void {
        this.config.connectionTimeoutMillis = connectionTimeoutMillis;
        this.config.readTimeoutMillis = readTimeoutMillis;
    }
}

export default Client;

import ClientInterface from "./httpClient/clientInterface";

interface ConfigConstructor {
    environment?: Environment;
    publicKey: string;
    secretKey: string;
    bearerToken: string;
    endpoint?: string;
    connectionTimeoutMillis?: number;
    readTimeoutMillis?: number;
    httpClient?: ClientInterface;
}

class Config {
    public publicKey: string;
    public secretKey: string;
    public bearerToken: string;
    public endpoint?: string;
    public connectionTimeoutMillis?: number;
    public readTimeoutMillis?: number;
    public environment?: Environment;
    public httpClient?: ClientInterface;

    public constructor(configuration: ConfigConstructor) {
        if (configuration.environment) this.environment = configuration.environment || "LIVE";
        this.secretKey = configuration.secretKey;
        this.publicKey = configuration.publicKey;
        this.bearerToken = configuration.bearerToken;
        if (configuration.endpoint) this.endpoint = configuration.endpoint;
        if (configuration.connectionTimeoutMillis) this.connectionTimeoutMillis = configuration.connectionTimeoutMillis || 30000;
        if (configuration.readTimeoutMillis) this.readTimeoutMillis = configuration.readTimeoutMillis || 3000;
        if (configuration.httpClient) this.httpClient = configuration.httpClient;
    }
}

export default Config;

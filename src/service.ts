import Client from "./client";

class Service {
    public client: Client;

    protected constructor(client: Client) {
        this.client = client;
    }
}

export default Service;

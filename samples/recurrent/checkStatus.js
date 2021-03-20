const {Client, Config, RecurrentCheckout} = require("seerbit-nodejs");
const {SeerBitConfig} = require("../config");
const config = new Config(
    {
        publicKey: SeerBitConfig.PUBLIC_KEY,
        secretKey: SeerBitConfig.SECRET_KEY,
        bearerToken: SeerBitConfig.TOKEN
    });

const client = new Client(config);

const verificationService = new RecurrentCheckout(client);
const payload = {
    billingId: "1614510868673"
}

verificationService.CheckSubscriptionStatus(payload)
    .then(res=>console.log(res))
    .catch(e=>console.log(e))

const {Client, Config, CardCheckout} = require("seerbit-nodejs");
const {SeerBitConfig} = require("../config");
const config = new Config(
    {
        publicKey: SeerBitConfig.PUBLIC_KEY,
        secretKey: SeerBitConfig.SECRET_KEY,
        bearerToken: SeerBitConfig.TOKEN
    });

const client = new Client(config);

const checkout = new CardCheckout(client);
const payload = {
    amount:100,
    currency: "NGN",
    productDescription: "preauth test capture",
    paymentReference: ""
}

checkout.CancelPreAuth(payload)
    .then(res=>console.log(res))
    .catch(e=>console.log(e))





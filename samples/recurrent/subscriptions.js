const {Client, Config,RecurrentCheckout } = require("../../dist/src/index");
const {SeerBitConfig} = require("../config");
const config = new Config(
    {
        publicKey: SeerBitConfig.PUBLIC_KEY,
        secretKey: SeerBitConfig.SECRET_KEY,
        bearerToken: SeerBitConfig.TOKEN
    });

const client = new Client(config);

const checkout = new RecurrentCheckout(client);

checkout.GetSubscriptions()
    .then(res=>console.log(res))
    .catch(e=>console.log(e))





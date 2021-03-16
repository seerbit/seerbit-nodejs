const {Client, Config,OrderService } = require("seerbit-nodejs");
const {SeerBitConfig} = require("../config");
const config = new Config(
    {
        publicKey: SeerBitConfig.PUBLIC_KEY,
        secretKey: SeerBitConfig.SECRET_KEY,
        bearerToken: SeerBitConfig.TOKEN
    });

const client = new Client(config);

const checkout = new OrderService(client);

checkout.GetOrderByReference( { paymentReference: "1614546769962"})
    .then(res=>console.log(res))
    .catch(e=>console.log(e))





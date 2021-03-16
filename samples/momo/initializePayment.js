const {Client, Config,MobileMoneyCheckout } = require("seerbit-nodejs");
const {SeerBitConfig} = require("../config");
const config = new Config(
    {
        publicKey: SeerBitConfig.PUBLIC_KEY,
        secretKey: SeerBitConfig.SECRET_KEY,
        bearerToken: SeerBitConfig.TOKEN
    });

const client = new Client(config);

const checkout = new MobileMoneyCheckout(client);

checkout.InitializeTransaction({
    amount:100,
    country: "GH",
    currency: "GHS",
    cvv:"100",
    network:"MTN",
    mobileNumber:"0248360953",
    email:"testmerchant@mailinator.com",
    paymentReference: Date.now()
})
    .then(res=>console.log(res))
    .catch(e=>console.log(e))





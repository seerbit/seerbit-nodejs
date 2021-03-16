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

checkout.AuthorizePreAuthWithToken({
    amount:100,
    country: "NG",
    currency: "NGN",
    cvv:"100",
    email:"testmerchant@mailinator.com",
    cardToken: "tk_c47516c9-28ef-4dae-a383-bece92c96e26",
    paymentReference: Date.now()
})
    .then(res=>console.log(res))
    .catch(e=>console.log(e))





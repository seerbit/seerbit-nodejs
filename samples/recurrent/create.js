const {Client, Config,RecurrentCheckout } = require("seerbit-nodejs");
const {SeerBitConfig} = require("../config");
const config = new Config(
    {
        publicKey: SeerBitConfig.PUBLIC_KEY,
        secretKey: SeerBitConfig.SECRET_KEY,
        bearerToken: SeerBitConfig.TOKEN
    });

const client = new Client(config);

const checkout = new RecurrentCheckout(client);

checkout.CreateRecurringSubscription({
    "planId":"",
    "cardNumber":"5123450000000008",
    "expiryMonth":"05",
    "callbackUrl":"https://www.google.com",
    "expiryYear":"21",
    "cvv":"100",
    "amount":"1000.00",
    "currency":"NGN",
    "productDescription":"Pilot Test Subscription",
    "productId":"Terrain",
    "country":"NG",
    "startDate":"2020-02-25 00:00:00",
    "cardName":"Kolade Samuel",
    "billingCycle":"WEEKLY",
    "email":"akintoyekolawole@gmail.com",
    "mobileNumber":"08033456500",
    "customerId":"12345678901234",
    "pin":"0999",
    "type":"3DSECURE",
    "billingPeriod":"1",
    "subscriptionAmount": true,
    "paymentReference": Date.now()
})
    .then(res=>console.log(res))
    .catch(e=>console.log(e))





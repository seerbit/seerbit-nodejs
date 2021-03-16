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

checkout.CreateOrderBeforePayment({
    "email":"johndoe@gmail.com",
    "paymentReference": Date.now(),
    "fullName":"John Doe",
    "orderType":"BULK_BULK",
    "mobileNumber":"08000000001",
    "callbackUrl":"https://yourdomain.com",
    "country":"NG",
    "currency":"NGN",
    "amount":"1400",
    "orders":[
        {
            "orderId":"22S789420214623",
            "currency":"NGN",
            "amount":"500.00",
            "productId":"fruits",
            "productDescription":"mango"
        },
        {
            "orderId":"1a3sa82748272556947",
            "currency":"NGN",
            "amount":"900.00",
            "productId":"fruits",
            "productDescription":"orange"
        }
    ]
})
    .then(res=>console.log(res))
    .catch(e=>console.log(e))





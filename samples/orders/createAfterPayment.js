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

checkout.CreateOrderAfterPayment({
    "paymentReference": "1614546769962",
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





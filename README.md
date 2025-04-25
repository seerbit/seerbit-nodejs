<div align="center">
 <img width="400" valign="top" src="https://assets.seerbitapi.com/images/seerbit_logo_type.png">
</div>

<h1 align="center">
  <img width="60" valign="bottom" src="https://nodejs.org/static/images/logo.svg">
   SeerBit
</h1>

# SeerBit's API SDK for NodeJS

SeerBit NodeJS SDK for easy integration with SeerBit's API.

## Integration

The Library supports all APIs under the following services:

- [x] standard checkout
- [x] recurrent payment
- [x] pre-auth payment
- [x] mobile money payment
- [x] card payments
- [x] order service

## Requirements

- Node 14 or higher

## Installation

```bash
npm install --save seerbit-nodejs

OR

yarn add --save seerbit-nodejs

OR

pnpm install --save seerbit-nodejs
```

#### You can find both public and secret keys from your merchant dashboard.

Your merchant account token can be generated following the guides [here](https://doc.seerbit.com/development-resources/key-encryption)

## Usage

### Standard Checkout

```js
const {Client, Config, StandardCheckout} = require("seerbit-nodejs");
const {SeerBitConfig} = require("../config");
const config = new Config(
    {
        publicKey: SeerBitConfig.PUBLIC_KEY,
        secretKey: SeerBitConfig.SECRET_KEY,
        bearerToken: SeerBitConfig.TOKEN
    });
const client = new Client(config);

const standard = new StandardCheckout(client);
const payload = {
    amount:100,
    callbackUrl: "www.testapp.com",
    country: "NG",
    currency: "NGN",
    email:"testmerchant@mail.com",
    paymentReference: Date.now()
    fullName: "Test Name"
    tokenize: false
}

standard.Initialize(payload)
    .then(res=>console.log(res))
    .catch(e=>console.log(e))
```

You can find more usage in the [samples](samples) folder

## Properties

| Property         | Type                 | Required | Desc                                                     |
| ---------------- | -------------------- | -------- | -------------------------------------------------------- |
| currency         | `String`             | Optional | The currency for the transaction e.g NGN                 |
| email            | `String`             | Required | The email of the user to be charged                      |
| fullName         | `String`             | Optional | The fullname of the user to be charged                   |
| country          | `String`             | Optional | Transaction country which can be optional                |
| amount           | `String`             | Required | The transaction amount in kobo                           |
| publicKey        | `String`             | Required | Your Public key or see above step to get yours           |
| tokenize         | `bool`               | Optional | Tokenize card                                            |
| paymentReference | `String` or `Number` | Required | Set a unique transaction reference for every transaction |

## API Documentation

- https://doc.seerbit.com/

## Contributing

We strongly encourage you to join us in contributing to this repository so everyone can benefit from:

- New features and functionality
- Resolved bug fixes and issues
- Any general improvements

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

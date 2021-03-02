<div align="center">
 <img width="200" valign="top" src="https://res.cloudinary.com/dy2dagugp/image/upload/v1571249658/seerbit-logo_mdinom.png">
</div>


<h1 align="center">
  <img width="60" valign="bottom" src="https://nodejs.org/static/images/logo.svg">
   SeerBit
</h1>


# SeerBit's API SDK for NodeJS 

SeerBit NodeJS SDK for easy integration with SeerBit's API.

## Integration
The Library supports all APIs under the following services:

* [x] standard checkout
* [x] recurrent payment
* [x] pre-auth payment
* [x] mobile money payment
* [x] card payments
* [x] order service

## Requirements
* Node 10 or higher

## Installation

```bash
npm install --save seerbit-nodejs

yarn add --save seerbit-nodejs
```

#### You can find both public and secret keys from your merchant dashboard. 

Your merchant account token can be generated following the guides [here](https://doc.seerbit.com/getstarted/authentication)


## Usage

### Standard Checkout
```  js
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
}

standard.Initialize(payload)
    .then(res=>console.log(res))
    .catch(e=>console.log(e))
```

You can find more usage in the  [samples](samples) folder


## API Documentation ##
* https://doc.seerbit.com/

## Contributing
We strongly encourage you to join us in contributing to this repository so everyone can benefit from:
* New features and functionality
* Resolved bug fixes and issues
* Any general improvements

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

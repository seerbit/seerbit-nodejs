const {Client, Config, VerificationService} = require("../dist/src/index");
const {SeerBitConfig} = require("./config");
const config = new Config(
    {
        publicKey: SeerBitConfig.PUBLIC_KEY,
        secretKey: SeerBitConfig.SECRET_KEY,
        bearerToken: SeerBitConfig.TOKEN
    });

const client = new Client(config);

const verificationService = new VerificationService(client);
const payload = {
    paymentReference: "1614510868673"
}

verificationService.Verify(payload)
    .then(res=>console.log(res))
    .catch(e=>console.log(e))

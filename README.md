# Mpesa API tutorial

This is a brief on how you can setup an `Lipa na Mpesa Online` faster and easily with Nodejs

# Credentials

## Intialize Mpesa

```js
import { Mpesa } from "mpesa-api";
import config from "./config";

const credentials = {
    client_key: config.client_key,
    client_secret: config.client_secret,
    initiator_password: config.initiator_password
}

const mpesa = new Mpesa(credentials, "sandbox");

export default mpesa;

```

## Get all credentials

```js
mpesa
    .lipaNaMpesaOnline({
      BusinessShortCode: 174379,
      Amount: 10,
      PartyA: config.phone_number,
      PartyB: "174379",
      PhoneNumber: config.phone_number,
      CallBackURL: "/wsf.com",
      AccountReference: "account",
      passKey:
        "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919",
      TransactionType: "CustomerPayBillOnline",
      TransactionDesc: "Transaction Description"
    })
    .then(Res => {
        // Do whatever you want with the error data
      console.log(Res.data);
    })
    .catch(err => {
        // Do whatever you want with error data
      console.log(err.data);
    });
```

> **Note**: Business Short code and some missing credentials can be found here [https://developer.safaricom.co.ke/test_credentials](https://developer.safaricom.co.ke/test_credentials) 

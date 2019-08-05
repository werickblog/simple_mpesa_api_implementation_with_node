import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import mpesa from "./mpesa";
import config from "./config";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.set("port", process.env.PORT || 3987);

app.get("/", (req, res, next) => {
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
      console.log(Res.data);
    })
    .catch(err => {
      console.log(err.data);
    });
});

app.listen(app.get("port"), err => {
  if (err) console.error("Error running server due to ", err.message);
  console.log("> Running on port ", app.get("port"));
});

export default app;

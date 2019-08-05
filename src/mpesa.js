import { Mpesa } from "mpesa-api";
import config from "./config";

const credentials = {
    client_key: config.client_key,
    client_secret: config.client_secret,
    initiator_password: config.initiator_password
}

const mpesa = new Mpesa(credentials, "sandbox");

export default mpesa;

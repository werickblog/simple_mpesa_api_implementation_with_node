import process from "process"
import dotenv from "dotenv"

let env = process.env.ENV

dotenv.config()

export default {
    client_key: process.env.CONSUMER_KEY,
    client_secret: process.env.CONSUMER_SECRET,
    initiator_password: process.env.PASS,
    phone_number: process.env.PHONE_NUMBER
}

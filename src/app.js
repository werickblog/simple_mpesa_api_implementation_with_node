import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.set("port", process.env.PORT || 3987);

app.listen(app.get("port"), err => {
  if (err) console.error("Error running server due to ", err.message);
  console.log("> Running on port ", app.get("port"));
});

export default app;

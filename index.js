import express from "express";
import { db_connection } from "./Connections/db_connection.js";
import cors from "cors";
import { Routers } from "./Routers/Routerpage.js";

const app = express();
db_connection();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/", Routers);

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log("Listening...", PORT);
});

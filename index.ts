import Express from "express";
import { configureServer } from "./src";

const app = Express();

configureServer(app);

app.listen(8080, () => {
  console.log("Sever Started..");
});

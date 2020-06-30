import Express from "express";
import Cors from "cors";
import { initialize } from "passport";
import Routes from "./@utils/routes";
import routes from "./app/routes";
import * as bodyParser from "body-parser";

export const configureServer = (app: any) => {
  app.use(Express.json({ limit: "5mb" }));
  app.use(
    Cors({
      origin: "http://localhost:3000",
    })
  );
  app.use(
    bodyParser.urlencoded({
      extended: false,
      limit: "5mb",
    })
  );
  app.use(bodyParser.json());

  app.use(initialize());

  new Routes(app, routes).configureRoutes();
};

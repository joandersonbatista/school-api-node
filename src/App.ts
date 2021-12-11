import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

import { Middlewares } from "./Middlewares";
import { IMiddlewaresProtocol } from "./IMiddlewaresProtocol";
import { Router } from "./Router";
import { IRoutesProtocol } from "./IRoutesProtocol";
import { IConnectionDbProtocol } from "./database/IConnectionDbProtocol";
import { connectionMySql } from "./database/ConnectionMySql";
import { connectionMongoDB } from "./database/ConnectionMongoDB";

class App {
  app: express.Application;

  middlewares: IMiddlewaresProtocol;
  routes: IRoutesProtocol;
  connectionDB: IConnectionDbProtocol;

  constructor() {
    this.app = express();
    this.middlewares = new Middlewares(this.app);
    this.routes = new Router(this.app);
    this.connectionDB = connectionMongoDB;
    // this.connectionDB = connectionMySql;
  }
}

export default new App().app;

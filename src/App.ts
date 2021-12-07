import express from "express";

import { Middlewares } from "./Middlewares";
import { IMiddlewaresProtocol } from "./IMiddlewaresProtocol";
import { Router } from "./Router";
import { IRoutesProtocol } from "./IRoutesProtocol";
import { IConnectionDbProtocol } from "./database/IConnectionDbProtocol";
import { ConnectionDB } from "./database/ConnectionDb";

class App {
  app: express.Application;

  middlewares: IMiddlewaresProtocol;
  routes: IRoutesProtocol;
  connectionDB: IConnectionDbProtocol;

  constructor() {
    this.app = express();
    this.middlewares = new Middlewares(this.app);
    this.routes = new Router(this.app);
    this.connectionDB = ConnectionDB;
  }
}

export default new App().app;

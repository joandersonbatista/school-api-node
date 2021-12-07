import { urlencoded, json, Application } from "express";

import { IMiddlewaresProtocol } from "./IMiddlewaresProtocol";

class Middlewares implements IMiddlewaresProtocol {
  constructor(public app: Application) {
    this.middlewares();
  }

  middlewares(): void {
    this.app.use(urlencoded({ extended: true }));
    this.app.use(json());
  }
}

export { Middlewares };

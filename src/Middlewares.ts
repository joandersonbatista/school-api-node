import { urlencoded, json, Application } from "express";
import cors from "cors";
import helmet from "helmet";

import { IMiddlewaresProtocol } from "./IMiddlewaresProtocol";

class Middlewares implements IMiddlewaresProtocol {
  constructor(public app: Application) {
    this.middlewares();
  }

  middlewares(): void {
    this.app.use(urlencoded({ extended: true }));
    this.app.use(json());
    this.app.use(cors());
    this.app.use(helmet());
  }
}

export { Middlewares };

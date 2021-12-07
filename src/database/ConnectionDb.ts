import { Sequelize, Options } from "sequelize";

import config from "../config/database";
import { IConnectionDbProtocol } from "./IConnectionDbProtocol";

class ConnectionDb implements IConnectionDbProtocol {
  public connection!: Sequelize;

  constructor() {
    this.connectDB();
  }

  connectDB(): void {
    this.connection = new Sequelize(config as Options);
  }
}

const ConnectionDB = new ConnectionDb();

export { ConnectionDB };

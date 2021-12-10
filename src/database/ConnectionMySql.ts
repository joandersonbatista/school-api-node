import { Sequelize, Options } from "sequelize";

import config from "../config/database";
import { IConnectionDbProtocol } from "./IConnectionDbProtocol";

class ConnectionMySql implements IConnectionDbProtocol {
  public connection!: Sequelize;

  constructor() {
    this.connectDB();
  }

  connectDB(): void {
    this.connection = new Sequelize(config as Options);
  }
}

const connectionMySql = new ConnectionMySql();

export { connectionMySql };

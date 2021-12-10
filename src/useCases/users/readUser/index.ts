import { ReadUserController } from "../../../controllers/user/ReadUserController";
import { MongoDbUserRepository } from "../../../repositories/mongoDb/MongoDbUserRepository";
import { MysqlUserRepository } from "../../../repositories/mysql/MySqlUserRepository";
import { ReadUser } from "./ReadUser";

const mysqlUserRepository = new MysqlUserRepository();
const mongoDbUserRepository = new MongoDbUserRepository();
const readUser = new ReadUser(
  // mysqlUserRepository,
  mongoDbUserRepository,
);
const readUserController = new ReadUserController(readUser);

export { readUserController };

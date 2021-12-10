import { LoginRequiredMiddleware } from "../../../middlewares/LoginRequiredMiddleware";
import { MongoDbUserRepository } from "../../../repositories/mongoDb/MongoDbUserRepository";
import { MysqlUserRepository } from "../../../repositories/mysql/MySqlUserRepository";
import { LoginRequired } from "./LoginRequired";

const mysqlUserRepository = new MysqlUserRepository();
const mongoDbUserRepository = new MongoDbUserRepository();
const loginRequired = new LoginRequired(
  // mysqlUserRepository,
  mongoDbUserRepository
);
const loginRequiredMiddleware = new LoginRequiredMiddleware(loginRequired);

export { loginRequiredMiddleware };

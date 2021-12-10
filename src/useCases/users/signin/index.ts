import { SignInController } from "../../../controllers/signIn/SignInController";
import { MongoDbUserRepository } from "../../../repositories/mongoDb/MongoDbUserRepository";
import { MysqlUserRepository } from "../../../repositories/mysql/MySqlUserRepository";
import { SignIn } from "./SignIn";

const mysqlUserRepository = new MysqlUserRepository();
const mongoDbUserRepository = new MongoDbUserRepository();
const signIn = new SignIn(
  // mysqlUserRepository,
  mongoDbUserRepository
);
const signInController = new SignInController(signIn);

export { signInController };

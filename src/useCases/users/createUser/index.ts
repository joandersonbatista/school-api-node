import { CreateUser } from "./CreateUser";
import { UserCreateValidantion } from "./validations/UserCreateValidations";
import { MysqlUserRepository } from "../../../repositories/mysql/MySqlUserRepository";
import { CreateUserController } from "../../../controllers/user/CreateUserController";
import { MongoDbUserRepository } from "../../../repositories/mongoDb/MongoDbUserRepository";

const mysqlUserRepository = new MysqlUserRepository();
const mongoDbUserRepository = new MongoDbUserRepository();
const userCreateValidations = new UserCreateValidantion();
const createUser = new CreateUser(
  // mysqlUserRepository,
  mongoDbUserRepository,
  userCreateValidations,
);
const createUserController = new CreateUserController(createUser);

export { createUserController };

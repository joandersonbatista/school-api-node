import { UpdateUserController } from "../../../controllers/user/UpdateUserController";
import { MongoDbUserRepository } from "../../../repositories/mongoDb/MongoDbUserRepository";
import { MysqlUserRepository } from "../../../repositories/mysql/MySqlUserRepository";
import { UpdateUser } from "./UpdateUser";
import { ValidationsUserUpdate } from "./validations/ValidationsUserUpdate";

const validations = new ValidationsUserUpdate();
const mysqlUserRepository = new MysqlUserRepository();
const mongoDbUserRepository = new MongoDbUserRepository();
const userUpdate = new UpdateUser(
  // mysqlUserRepository,
  mongoDbUserRepository,
  validations);
const updateUserController = new UpdateUserController(userUpdate);

export { updateUserController };

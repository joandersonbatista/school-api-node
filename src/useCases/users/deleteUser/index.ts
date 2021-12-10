import { DeleteUserController } from "../../../controllers/user/DeleteUserController";
import { MongoDbUserRepository } from "../../../repositories/mongoDb/MongoDbUserRepository";
import { MysqlUserRepository } from "../../../repositories/mysql/MySqlUserRepository";
import { DeleteUser } from "./DeleteUser";

const mysqlUserRepository = new MysqlUserRepository();
const mongoDbUserRepository = new MongoDbUserRepository();
const deleteUser = new DeleteUser(
  // mysqlUserRepository,
  mongoDbUserRepository
);
const deleteUserController = new DeleteUserController(deleteUser);

export { deleteUserController };

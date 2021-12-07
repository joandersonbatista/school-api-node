import { ReadUserController } from "../../../controllers/user/ReadUserController";
import { MysqlUserRepository } from "../../../repositories/mysql/MySqlUserRepository";
import { ReadUser } from "./ReadUser";

const readUserRepository = new MysqlUserRepository();
const readUser = new ReadUser(readUserRepository);
const readUserController = new ReadUserController(readUser);

export { readUserController };

import { DeleteUserController } from "../../../controllers/user/DeleteUserController";
import { MysqlUserRepository } from "../../../repositories/mysql/MySqlUserRepository";
import { DeleteUser } from "./DeleteUser";

const deleteUserRepository = new MysqlUserRepository();
const deleteUser = new DeleteUser(deleteUserRepository);
const deleteUserController = new DeleteUserController(deleteUser);

export { deleteUserController };

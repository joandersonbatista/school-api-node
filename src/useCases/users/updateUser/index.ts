import { UpdateUserController } from "../../../controllers/user/UpdateUserController";
import { MysqlUserRepository } from "../../../repositories/mysql/MySqlUserRepository";
import { UpdateUser } from "./UpdateUser";
import { ValidationsUserUpdate } from "./validations/ValidationsUserUpdate";

const validations = new ValidationsUserUpdate();
const updateUserRepository = new MysqlUserRepository();
const userUpdate = new UpdateUser(updateUserRepository, validations);
const updateUserController = new UpdateUserController(userUpdate);

export { updateUserController };

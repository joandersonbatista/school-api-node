import { CreateUser } from "./CreateUser";
import { UserCreateValidantion } from "./validations/UserCreateValidations";
import { MysqlUserRepository } from "../../../repositories/mysql/MySqlUserRepository";
import { CreateUserController } from "../../../controllers/user/CreateUserController";

const createUserRepository = new MysqlUserRepository();
const userCreateValidations = new UserCreateValidantion();
const createUser = new CreateUser(createUserRepository, userCreateValidations);
const createUserController = new CreateUserController(createUser);

export { createUserController };

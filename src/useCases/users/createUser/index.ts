import { CreateUser } from "./CreateUser";
import { UserCreateValidantion } from "./validations/UserCreateValidations";
import { CreateUserController } from "../../../controllers/user/CreateUserController";
import { userRepository } from "../../../utils/chooseApplicationDatabase";

const userCreateValidations = new UserCreateValidantion();
const createUser = new CreateUser(userRepository(), userCreateValidations);
const createUserController = new CreateUserController(createUser);

export { createUserController };

import { ReadUserController } from "../../../controllers/user/ReadUserController";
import { userRepository } from "../../../utils/chooseApplicationDatabase";
import { ReadUser } from "./ReadUser";

const readUser = new ReadUser(userRepository());
const readUserController = new ReadUserController(readUser);

export { readUserController };

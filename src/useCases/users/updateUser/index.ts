import { UpdateUserController } from "../../../controllers/user/UpdateUserController";
import { userRepository } from "../../../utils/chooseApplicationDatabase";
import { UpdateUser } from "./UpdateUser";
import { ValidationsUserUpdate } from "./validations/ValidationsUserUpdate";

const validations = new ValidationsUserUpdate();
const userUpdate = new UpdateUser(userRepository(), validations);
const updateUserController = new UpdateUserController(userUpdate);

export { updateUserController };

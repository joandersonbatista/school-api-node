import { DeleteUserController } from "../../../controllers/user/DeleteUserController";
import { userRepository } from "../../../utils/chooseApplicationDatabase";
import { DeleteUser } from "./DeleteUser";

const deleteUser = new DeleteUser(userRepository());
const deleteUserController = new DeleteUserController(deleteUser);

export { deleteUserController, deleteUser };

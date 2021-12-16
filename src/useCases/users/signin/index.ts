import { SignInController } from "../../../controllers/signIn/SignInController";
import { userRepository } from "../../../utils/chooseApplicationDatabase";
import { SignIn } from "./SignIn";

const signIn = new SignIn(userRepository());
const signInController = new SignInController(signIn);

export { signInController };

import { LoginRequiredMiddleware } from "../../../middlewares/LoginRequiredMiddleware";
import { userRepository } from "../../../utils/chooseApplicationDatabase";
import { LoginRequired } from "./LoginRequired";

const loginRequired = new LoginRequired(userRepository());
const loginRequiredMiddleware = new LoginRequiredMiddleware(loginRequired);

export { loginRequiredMiddleware };

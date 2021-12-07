import { SignInController } from "../../../controllers/signIn/SignInController";
import { MysqlUserRepository } from "../../../repositories/mysql/MySqlUserRepository";
import { SignIn } from "./SignIn";

const signInRepository = new MysqlUserRepository();
const signIn = new SignIn(signInRepository);
const signInController = new SignInController(signIn);

export { signInController };

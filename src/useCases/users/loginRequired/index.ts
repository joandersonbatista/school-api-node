import { LoginRequiredMiddleware } from "../../../middlewares/LoginRequiredMiddleware";
import { MysqlUserRepository } from "../../../repositories/mysql/MySqlUserRepository";
import { LoginRequired } from "./LoginRequired";

const userRepository = new MysqlUserRepository();
const loginRequired = new LoginRequired(userRepository);
const loginRequiredMiddleware = new LoginRequiredMiddleware(loginRequired);

export { loginRequiredMiddleware };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRequiredMiddleware = void 0;
const LoginRequiredMiddleware_1 = require("../../../middlewares/LoginRequiredMiddleware");
const MySqlUserRepository_1 = require("../../../repositories/mysql/MySqlUserRepository");
const LoginRequired_1 = require("./LoginRequired");
const userRepository = new MySqlUserRepository_1.MysqlUserRepository();
const loginRequired = new LoginRequired_1.LoginRequired(userRepository);
const loginRequiredMiddleware = new LoginRequiredMiddleware_1.LoginRequiredMiddleware(loginRequired);
exports.loginRequiredMiddleware = loginRequiredMiddleware;
//# sourceMappingURL=index.js.map
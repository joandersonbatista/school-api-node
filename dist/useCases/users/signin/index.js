"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInController = void 0;
const SignInController_1 = require("../../../controllers/signIn/SignInController");
const MySqlUserRepository_1 = require("../../../repositories/mysql/MySqlUserRepository");
const SignIn_1 = require("./SignIn");
const signInRepository = new MySqlUserRepository_1.MysqlUserRepository();
const signIn = new SignIn_1.SignIn(signInRepository);
const signInController = new SignInController_1.SignInController(signIn);
exports.signInController = signInController;
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRequiredMiddleware = void 0;
const LoginRequiredMiddleware_1 = require("../../../middlewares/LoginRequiredMiddleware");
const chooseApplicationDatabase_1 = require("../../../utils/chooseApplicationDatabase");
const LoginRequired_1 = require("./LoginRequired");
const loginRequired = new LoginRequired_1.LoginRequired((0, chooseApplicationDatabase_1.userRepository)());
const loginRequiredMiddleware = new LoginRequiredMiddleware_1.LoginRequiredMiddleware(loginRequired);
exports.loginRequiredMiddleware = loginRequiredMiddleware;
//# sourceMappingURL=index.js.map
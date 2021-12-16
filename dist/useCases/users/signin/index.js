"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInController = void 0;
const SignInController_1 = require("../../../controllers/signIn/SignInController");
const chooseApplicationDatabase_1 = require("../../../utils/chooseApplicationDatabase");
const SignIn_1 = require("./SignIn");
const signIn = new SignIn_1.SignIn((0, chooseApplicationDatabase_1.userRepository)());
const signInController = new SignInController_1.SignInController(signIn);
exports.signInController = signInController;
//# sourceMappingURL=index.js.map
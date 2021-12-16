"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readUserController = void 0;
const ReadUserController_1 = require("../../../controllers/user/ReadUserController");
const chooseApplicationDatabase_1 = require("../../../utils/chooseApplicationDatabase");
const ReadUser_1 = require("./ReadUser");
const readUser = new ReadUser_1.ReadUser((0, chooseApplicationDatabase_1.userRepository)());
const readUserController = new ReadUserController_1.ReadUserController(readUser);
exports.readUserController = readUserController;
//# sourceMappingURL=index.js.map
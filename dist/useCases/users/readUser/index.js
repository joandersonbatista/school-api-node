"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readUserController = void 0;
const ReadUserController_1 = require("../../../controllers/user/ReadUserController");
const MySqlUserRepository_1 = require("../../../repositories/mysql/MySqlUserRepository");
const ReadUser_1 = require("./ReadUser");
const readUserRepository = new MySqlUserRepository_1.MysqlUserRepository();
const readUser = new ReadUser_1.ReadUser(readUserRepository);
const readUserController = new ReadUserController_1.ReadUserController(readUser);
exports.readUserController = readUserController;
//# sourceMappingURL=index.js.map
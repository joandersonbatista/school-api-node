"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = void 0;
const DeleteUserController_1 = require("../../../controllers/user/DeleteUserController");
const MySqlUserRepository_1 = require("../../../repositories/mysql/MySqlUserRepository");
const DeleteUser_1 = require("./DeleteUser");
const deleteUserRepository = new MySqlUserRepository_1.MysqlUserRepository();
const deleteUser = new DeleteUser_1.DeleteUser(deleteUserRepository);
const deleteUserController = new DeleteUserController_1.DeleteUserController(deleteUser);
exports.deleteUserController = deleteUserController;
//# sourceMappingURL=index.js.map
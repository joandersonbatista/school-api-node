"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserController = void 0;
const UpdateUserController_1 = require("../../../controllers/user/UpdateUserController");
const MySqlUserRepository_1 = require("../../../repositories/mysql/MySqlUserRepository");
const UpdateUser_1 = require("./UpdateUser");
const ValidationsUserUpdate_1 = require("./validations/ValidationsUserUpdate");
const validations = new ValidationsUserUpdate_1.ValidationsUserUpdate();
const updateUserRepository = new MySqlUserRepository_1.MysqlUserRepository();
const userUpdate = new UpdateUser_1.UpdateUser(updateUserRepository, validations);
const updateUserController = new UpdateUserController_1.UpdateUserController(userUpdate);
exports.updateUserController = updateUserController;
//# sourceMappingURL=index.js.map
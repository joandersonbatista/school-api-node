"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserController = void 0;
const UpdateUserController_1 = require("../../../controllers/user/UpdateUserController");
const chooseApplicationDatabase_1 = require("../../../utils/chooseApplicationDatabase");
const UpdateUser_1 = require("./UpdateUser");
const ValidationsUserUpdate_1 = require("./validations/ValidationsUserUpdate");
const validations = new ValidationsUserUpdate_1.ValidationsUserUpdate();
const userUpdate = new UpdateUser_1.UpdateUser((0, chooseApplicationDatabase_1.userRepository)(), validations);
const updateUserController = new UpdateUserController_1.UpdateUserController(userUpdate);
exports.updateUserController = updateUserController;
//# sourceMappingURL=index.js.map
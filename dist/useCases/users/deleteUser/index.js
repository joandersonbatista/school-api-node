"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.deleteUserController = void 0;
const DeleteUserController_1 = require("../../../controllers/user/DeleteUserController");
const chooseApplicationDatabase_1 = require("../../../utils/chooseApplicationDatabase");
const DeleteUser_1 = require("./DeleteUser");
const deleteUser = new DeleteUser_1.DeleteUser((0, chooseApplicationDatabase_1.userRepository)());
exports.deleteUser = deleteUser;
const deleteUserController = new DeleteUserController_1.DeleteUserController(deleteUser);
exports.deleteUserController = deleteUserController;
//# sourceMappingURL=index.js.map
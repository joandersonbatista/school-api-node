"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
const CreateUser_1 = require("./CreateUser");
const UserCreateValidations_1 = require("./validations/UserCreateValidations");
const MySqlUserRepository_1 = require("../../../repositories/mysql/MySqlUserRepository");
const CreateUserController_1 = require("../../../controllers/user/CreateUserController");
const createUserRepository = new MySqlUserRepository_1.MysqlUserRepository();
const userCreateValidations = new UserCreateValidations_1.UserCreateValidantion();
const createUser = new CreateUser_1.CreateUser(createUserRepository, userCreateValidations);
const createUserController = new CreateUserController_1.CreateUserController(createUser);
exports.createUserController = createUserController;
//# sourceMappingURL=index.js.map
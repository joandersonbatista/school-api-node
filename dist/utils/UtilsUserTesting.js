"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilsUserTesting = void 0;
const MongoDbUser_1 = require("../models/mongoDb/MongoDbUser");
const UserModel_1 = require("../models/mysql/UserModel");
const CreateUser_1 = require("../useCases/users/createUser/CreateUser");
const UserCreateValidations_1 = require("../useCases/users/createUser/validations/UserCreateValidations");
const ValidationsUserUpdate_1 = require("../useCases/users/updateUser/validations/ValidationsUserUpdate");
const SignIn_1 = require("../useCases/users/signin/SignIn");
const chooseApplicationDatabase_1 = require("./chooseApplicationDatabase");
class UtilsUserTesting {
    userCreateValidations;
    userUpdateValidations;
    signIn;
    data;
    createUser;
    constructor(userCreateValidations = new UserCreateValidations_1.UserCreateValidantion(), userUpdateValidations = new ValidationsUserUpdate_1.ValidationsUserUpdate(), signIn = new SignIn_1.SignIn((0, chooseApplicationDatabase_1.userRepository)()), data = {
        email: "jubiscleiton@gmail.com",
        name: "Jubis",
        password: "123456",
    }, createUser = new CreateUser_1.CreateUser((0, chooseApplicationDatabase_1.userRepository)(), userCreateValidations)) {
        this.userCreateValidations = userCreateValidations;
        this.userUpdateValidations = userUpdateValidations;
        this.signIn = signIn;
        this.data = data;
        this.createUser = createUser;
    }
    async createData(anotherUser) {
        if (anotherUser !== undefined) {
            anotherUser.password = "123456";
            return await this.createUser.execute(anotherUser);
        }
        this.data.password = "123456";
        return await this.createUser.execute(this.data);
    }
    async deleteData() {
        await MongoDbUser_1.MongoDbUser.deleteMany({});
        await UserModel_1.User.destroy({ where: {}, truncate: true });
    }
    async signInUser() {
        return await this.signIn.execute({
            email: "jubiscleiton@gmail.com",
            password: "123456",
        });
    }
    getRepository() {
        return (0, chooseApplicationDatabase_1.userRepository)();
    }
}
const utilsUserTesting = new UtilsUserTesting();
exports.utilsUserTesting = utilsUserTesting;
//# sourceMappingURL=UtilsUserTesting.js.map
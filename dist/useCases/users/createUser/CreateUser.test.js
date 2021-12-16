"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UtilsUserTesting_1 = require("../../../utils/UtilsUserTesting");
const CreateUser_1 = require("./CreateUser");
const createUser = new CreateUser_1.CreateUser(UtilsUserTesting_1.utilsUserTesting.getRepository(), UtilsUserTesting_1.utilsUserTesting.userCreateValidations); // sut
let userData;
const expectContainKeys = ["id", "name", "email", "password"];
afterAll(async () => {
    await UtilsUserTesting_1.utilsUserTesting.deleteData();
});
describe("Create user", () => {
    // todas Possibilidades de retorno da criação de um usuário..
    it("must be able to create user", async () => {
        userData = UtilsUserTesting_1.utilsUserTesting.data;
        await expect(createUser.execute(userData)).resolves.toContainKeys(expectContainKeys);
    });
    it("it is not possible to create user, user already exists", async () => {
        userData.password = "123456"; //
        await expect(createUser.execute(userData)).rejects.toThrow("E-mail already exists");
    });
    /* *************************************** */
});
//# sourceMappingURL=CreateUser.test.js.map
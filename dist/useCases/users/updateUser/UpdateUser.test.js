"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UtilsUserTesting_1 = require("../../../utils/UtilsUserTesting");
const UpdateUser_1 = require("./UpdateUser");
const updateUser = new UpdateUser_1.UpdateUser(UtilsUserTesting_1.utilsUserTesting.getRepository(), UtilsUserTesting_1.utilsUserTesting.userUpdateValidations);
let userData;
/* ******************************************************** */
beforeAll(async () => {
    const { email, id, name } = await UtilsUserTesting_1.utilsUserTesting.createData();
    userData = { email, id, name };
    userData.password = "123456";
    await UtilsUserTesting_1.utilsUserTesting.createData({
        email: "emailExists@gmail.com",
        name: "Dolores",
        password: "123456",
    });
});
afterAll(async () => {
    await UtilsUserTesting_1.utilsUserTesting.deleteData();
});
describe("update user", () => {
    it("should be able to update user", async () => {
        await expect(updateUser.execute(userData)).resolves.not.toThrow();
    });
    it("should return error 'email already existing' when trying to update", async () => {
        userData.email = "emailExists@gmail.com";
        userData.password = "123456";
        await expect(updateUser.execute(userData)).rejects.toThrow("E-mail already exists");
    });
    it("should be able to update the email", async () => {
        userData.email = "email_update@gmail.com";
        userData.password = "123456";
        await expect(updateUser.execute(userData)).resolves.not.toThrow();
    });
    it("should return 'non-existent user' error, because id does not exist in database", async () => {
        await UtilsUserTesting_1.utilsUserTesting.deleteData();
        await expect(updateUser.execute(userData)).rejects.toThrow("non-existent user");
    });
});
//# sourceMappingURL=UpdateUser.test.js.map
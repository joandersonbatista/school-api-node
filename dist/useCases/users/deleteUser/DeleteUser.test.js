"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UtilsUserTesting_1 = require("../../../utils/UtilsUserTesting");
const DeleteUser_1 = require("./DeleteUser");
let deleteUser = new DeleteUser_1.DeleteUser(UtilsUserTesting_1.utilsUserTesting.getRepository()); // sut
let userData; // contém o id para excluir o usuário
beforeAll(async () => {
    const id = (await UtilsUserTesting_1.utilsUserTesting.createData()).id;
    userData = { id };
});
afterAll(async () => {
    await UtilsUserTesting_1.utilsUserTesting.deleteData();
});
describe("delete user", () => {
    // todas Possibilidades de retorno da exclusão de um usuário..
    it("it must be possible to delete user", async () => {
        await expect(deleteUser.execute(userData)).resolves.not.toThrow();
    });
    it("Must not have user and throw 'user does not exist' error", async () => {
        await UtilsUserTesting_1.utilsUserTesting.deleteData();
        await expect(deleteUser.execute(userData)).rejects.toThrow("user does not exist");
    });
    /* *************************************** */
});
//# sourceMappingURL=DeleteUser.test.js.map
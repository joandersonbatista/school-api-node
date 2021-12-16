"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UtilsUserTesting_1 = require("../../../utils/UtilsUserTesting");
const ReadUser_1 = require("./ReadUser");
let userData; // contém o id para ler o usuário
let readUser = new ReadUser_1.ReadUser(UtilsUserTesting_1.utilsUserTesting.getRepository()); // sut
let expectReturn;
beforeAll(async () => {
    const { id } = await UtilsUserTesting_1.utilsUserTesting.createData();
    userData = { id };
    expectReturn = await UtilsUserTesting_1.utilsUserTesting.getRepository().read(userData.id);
});
afterAll(async () => {
    await UtilsUserTesting_1.utilsUserTesting.deleteData();
});
describe("read user", () => {
    it("it must be possible to read user and return user", async () => {
        await expect(readUser.execute(userData)).resolves.toStrictEqual(expectReturn);
    });
    it("must not read user, because user does not exist", async () => {
        await UtilsUserTesting_1.utilsUserTesting.deleteData();
        await expect(readUser.execute(userData)).rejects.toThrow("user does not exist");
    });
});
//# sourceMappingURL=ReadUser.test.js.map
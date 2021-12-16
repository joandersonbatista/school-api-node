"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoginRequired_1 = require("./LoginRequired");
const UtilsUserTesting_1 = require("../../../utils/UtilsUserTesting");
const loginRequired = new LoginRequired_1.LoginRequired(UtilsUserTesting_1.utilsUserTesting.getRepository()); // sut
let userData; // contém os dados para o login
let tokenTest;
beforeAll(async () => {
    await UtilsUserTesting_1.utilsUserTesting.createData();
    const { email, id, token } = await UtilsUserTesting_1.utilsUserTesting.signInUser();
    tokenTest = token;
    userData = { email, id };
});
afterAll(async () => {
    await UtilsUserTesting_1.utilsUserTesting.deleteData();
});
describe("login required", () => {
    // todas Possibilidades de retorno do login required..
    it("must verify that the token is valid and return the email and the User ID", async () => {
        await expect(loginRequired.execute(tokenTest)).resolves.toEqual(userData);
        await UtilsUserTesting_1.utilsUserTesting.deleteData();
    });
    it("must return 'invalid token' error, because token is not valid", async () => {
        const invalidToken = "invalid_token";
        await expect(loginRequired.execute(invalidToken)).rejects.toThrow("invalid token");
    });
    it("must return 'login required' error, because there is no user linked to the token", async () => {
        await UtilsUserTesting_1.utilsUserTesting.deleteData();
        await expect(loginRequired.execute(tokenTest)).rejects.toThrow("login required");
    });
    // não conseguir testar a validade do token...
    /*   it("must return 'expired token' error, because token is no longer valid", async () => {
      
      await expect(loginRequired.execute(token)).rejects.toThrow("expired token");
  
      expect(methodExistsUserToken).toHaveBeenCalledTimes(0);
    }); */
});
//# sourceMappingURL=LoginRequired.test.js.map
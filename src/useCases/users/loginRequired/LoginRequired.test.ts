import { ILoginRequiredDTO } from "./ILoginRequiredDTO";
import { LoginRequired } from "./LoginRequired";
import { utilsUserTesting } from "../../../utils/UtilsUserTesting";

const loginRequired = new LoginRequired(utilsUserTesting.getRepository()); // sut
let userData: ILoginRequiredDTO; // contém os dados para o login
let tokenTest: string;
// spy methods
const methodExistsUserToken = jest.spyOn(
  utilsUserTesting.getRepository(),
  "existsUserToken",
);

beforeAll(async () => {
  await utilsUserTesting.createData();
  const { email, id, token } = await utilsUserTesting.signInUser();
  tokenTest = token;
  userData = { email, id };
});

afterAll(async () => {
  await utilsUserTesting.deleteData();
});

describe("login required", () => {
  // todas Possibilidades de retorno do login required..

  it("must verify that the token is valid and return the email and the User ID", async () => {
    await expect(loginRequired.execute(tokenTest)).resolves.toEqual(userData);
    expect(methodExistsUserToken).toHaveBeenCalledTimes(1);
    await utilsUserTesting.deleteData();
  });

  it("must return 'invalid token' error, because token is not valid", async () => {
    const invalidToken = "invalid_token";

    await expect(loginRequired.execute(invalidToken)).rejects.toThrow(
      "invalid token",
    );
    expect(methodExistsUserToken).toHaveBeenCalledTimes(0);
  });

  it("must return 'login required' error, because there is no user linked to the token", async () => {
    await utilsUserTesting.deleteData();

    await expect(loginRequired.execute(tokenTest)).rejects.toThrow(
      "login required",
    );
    expect(methodExistsUserToken).toHaveBeenCalledTimes(1);
  });

  // não conseguir testar a validade do token...
  /*   it("must return 'expired token' error, because token is no longer valid", async () => {
    
    await expect(loginRequired.execute(token)).rejects.toThrow("expired token");

    expect(methodExistsUserToken).toHaveBeenCalledTimes(0);
  }); */
});

import { utilsUserTesting } from "../../../utils/UtilsUserTesting";
import { ISignInDTO } from "./ISignInDTO";
import { SignIn } from "./SignIn";

interface useDataTest {
  email: string | undefined;
  password: string | undefined;
}

const siginIn = new SignIn(utilsUserTesting.getRepository()); // sut
// contém os dados para signIn
let userData: useDataTest = {
  email: "jubiscleiton@gmail.com",
  password: "123456",
};
const expectContainKeys = ["token", "email", "id", "name"];

beforeAll(async () => {
  await utilsUserTesting.createData(); // criação do usuário para teste.
});

afterEach(async () => {
  userData = {
    email: "jubiscleiton@gmail.com",
    password: "123456",
  };
});

afterAll(async () => {
  await utilsUserTesting.deleteData();
});

describe("sigin in", () => {
  // todas Possibilidades de retorno do signIn..

  it("should return error 'user does not exist', because user does not exist", async () => {
    userData.email = "does_not_exists_@jubis.com";

    await expect(siginIn.execute(userData as ISignInDTO)).rejects.toThrow(
      "User does not exist",
    );
  });

  it("should return error 'invalid password', because the password is wrong", async () => {
    userData.password = "invalid_password";

    await expect(siginIn.execute(userData as ISignInDTO)).rejects.toThrow(
      "invalid password",
    );
  });

  it("must be able to login and return user data", async () => {
    await expect(
      siginIn.execute(userData as ISignInDTO),
    ).resolves.toContainKeys(expectContainKeys);
  });

  it("should return 'invalid credentials' error, because email or password is undefined", async () => {
    delete userData.email;
    delete userData.password;

    await expect(siginIn.execute(userData as ISignInDTO)).rejects.toThrow(
      "Invalid credentials",
    );
  });
});

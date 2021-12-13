import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

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
// spy methods
const methodExistsEmail = jest.spyOn(utilsUserTesting.getRepository(), "existsEmail");
const methodCompareBcrypt = jest.spyOn(bcryptjs, "compare");
const methodSignToken = jest.spyOn(jwt, "sign");

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
    expect(methodExistsEmail).toHaveBeenCalledTimes(1);
    expect(methodCompareBcrypt).toHaveBeenCalledTimes(0);
    expect(methodSignToken).toHaveBeenCalledTimes(0);
  });

  it("should return error 'invalid password', because the password is wrong", async () => {
    userData.password = "invalid_password";

    await expect(siginIn.execute(userData as ISignInDTO)).rejects.toThrow(
      "invalid password",
    );
    expect(methodExistsEmail).toHaveBeenCalledTimes(1);
    expect(methodCompareBcrypt).toHaveBeenCalledTimes(1);
    expect(methodSignToken).toHaveBeenCalledTimes(0);
  });

  it("must be able to login and return user data", async () => {
    await expect(
      siginIn.execute(userData as ISignInDTO),
    ).resolves.toHaveProperty("token");
    expect(methodExistsEmail).toHaveBeenCalledTimes(1);
    expect(methodCompareBcrypt).toHaveBeenCalledTimes(1);
    expect(methodSignToken).toHaveBeenCalledTimes(1);
  });

  it("should return 'invalid credentials' error, because email or password is undefined", async () => {
    delete userData.email;
    delete userData.password;

    await expect(siginIn.execute(userData as ISignInDTO)).rejects.toThrow(
      "Invalid credentials",
    );
    expect(methodExistsEmail).toHaveBeenCalledTimes(0);
    expect(methodCompareBcrypt).toHaveBeenCalledTimes(0);
    expect(methodSignToken).toHaveBeenCalledTimes(0);
  });
});

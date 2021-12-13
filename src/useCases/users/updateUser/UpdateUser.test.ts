import bcryptjs from "bcryptjs";

import { utilsUserTesting } from "../../../utils/UtilsUserTesting";
import { IUpdateUserDTO } from "./IUpdateUserDTO";
import { UpdateUser } from "./UpdateUser";

const updateUser = new UpdateUser(
  utilsUserTesting.getRepository(),
  utilsUserTesting.userUpdateValidations,
);
let userData: IUpdateUserDTO;
// spy methods
const methodExistId = jest.spyOn(utilsUserTesting.getRepository(), "existsId");
const methodExistsEmail = jest.spyOn(
  utilsUserTesting.getRepository(),
  "existsEmail",
);
const methodUpdate = jest.spyOn(utilsUserTesting.getRepository(), "update");
const methodHash = jest.spyOn(bcryptjs, "hash");
const methodValidationEmail = jest.spyOn(
  utilsUserTesting.userUpdateValidations,
  "validationEmail",
);
const methodValidationName = jest.spyOn(
  utilsUserTesting.userUpdateValidations,
  "validationName",
);
const methodValidationPassword = jest.spyOn(
  utilsUserTesting.userUpdateValidations,
  "validationPassword",
);

/* ******************************************************** */

beforeAll(async () => {
  const { email, id, name } = await utilsUserTesting.createData();
  userData = { email, id, name };
  userData.password = "123456";

  await utilsUserTesting.createData({
    email: "emailExists@gmail.com",
    name: "Dolores",
    password: "123456",
  });
});

afterAll(async () => {
  await utilsUserTesting.deleteData();
});

describe("update user", () => {
  it("should be able to update user", async () => {
    await expect(updateUser.execute(userData)).resolves.not.toThrow();
    expect(methodExistId).toHaveBeenCalledTimes(1);
    expect(methodExistsEmail).toHaveBeenCalledTimes(1);
    expect(methodUpdate).toHaveBeenCalledTimes(1);
    expect(methodHash).toHaveBeenCalledTimes(1);
    expect(methodValidationEmail).toHaveBeenCalledTimes(1);
    expect(methodValidationName).toHaveBeenCalledTimes(1);
    expect(methodValidationPassword).toHaveBeenCalledTimes(1);
  });

  it("should return error 'email already existing' when trying to update", async () => {
    userData.email = "emailExists@gmail.com";
    userData.password = "123456";
    await expect(updateUser.execute(userData)).rejects.toThrow(
      "E-mail already exists",
    );
    expect(methodExistId).toHaveBeenCalledTimes(1);
    expect(methodExistsEmail).toHaveBeenCalledTimes(1);
    expect(methodUpdate).toHaveBeenCalledTimes(0);
    expect(methodHash).toHaveBeenCalledTimes(0);
    expect(methodValidationEmail).toHaveBeenCalledTimes(1);
    expect(methodValidationName).toHaveBeenCalledTimes(1);
    expect(methodValidationPassword).toHaveBeenCalledTimes(1);
  });

  it("should be able to update the email", async () => {
    userData.email = "email_update@gmail.com";
    userData.password = "123456";
    await expect(updateUser.execute(userData)).resolves.not.toThrow();
    expect(methodExistId).toHaveBeenCalledTimes(1);
    expect(methodExistsEmail).toHaveBeenCalledTimes(1);
    expect(methodUpdate).toHaveBeenCalledTimes(1);
    expect(methodHash).toHaveBeenCalledTimes(1);
    expect(methodValidationEmail).toHaveBeenCalledTimes(1);
    expect(methodValidationName).toHaveBeenCalledTimes(1);
    expect(methodValidationPassword).toHaveBeenCalledTimes(1);
  });

  it("should return 'non-existent user' error, because id does not exist in database", async () => {
    await utilsUserTesting.deleteData();
    await expect(updateUser.execute(userData)).rejects.toThrow(
      "non-existent user",
    );
    expect(methodExistId).toHaveBeenCalledTimes(1);
    expect(methodExistsEmail).toHaveBeenCalledTimes(0);
    expect(methodUpdate).toHaveBeenCalledTimes(0);
    expect(methodHash).toHaveBeenCalledTimes(0);
    expect(methodValidationEmail).toHaveBeenCalledTimes(0);
    expect(methodValidationName).toHaveBeenCalledTimes(0);
    expect(methodValidationPassword).toHaveBeenCalledTimes(0);
  });
});

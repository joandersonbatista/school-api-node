import { utilsUserTesting } from "../../../utils/UtilsUserTesting";
import { CreateUser } from "./CreateUser";
import { ICreateUserDTO } from "./ICreateUserDTO";

const createUser = new CreateUser(
  utilsUserTesting.getRepository(),
  utilsUserTesting.userCreateValidations,
); // sut
let userData: ICreateUserDTO;

// spy methods
const methodValidationEmail = jest.spyOn(
  utilsUserTesting.userCreateValidations,
  "validationEmail",
);
const methodValidationName = jest.spyOn(
  utilsUserTesting.userCreateValidations,
  "validationName",
);
const methodValidationPassword = jest.spyOn(
  utilsUserTesting.userCreateValidations,
  "validationPassword",
);
const methodExistsEmail = jest.spyOn(
  utilsUserTesting.getRepository(),
  "existsEmail",
);
const methodSave = jest.spyOn(utilsUserTesting.getRepository(), "save");

afterAll(async () => {
  await utilsUserTesting.deleteData();
});

describe("Create user", () => {
  // todas Possibilidades de retorno da criação de um usuário..

  it("must be able to create user", async () => {
    userData = utilsUserTesting.data;
    await expect(createUser.execute(userData)).resolves.toHaveProperty("id");

    expect(methodValidationEmail).toHaveBeenCalledTimes(1);
    expect(methodValidationName).toHaveBeenCalledTimes(1);
    expect(methodValidationPassword).toHaveBeenCalledTimes(1);
    expect(methodExistsEmail).toHaveBeenCalledTimes(1);
    expect(methodSave).toHaveBeenCalledTimes(1);
  });

  it("it is not possible to create user, user already exists", async () => {
    userData.password = "123456"; //

    await expect(createUser.execute(userData)).rejects.toThrow(
      "E-mail already exists",
    );
    expect(methodValidationEmail).toHaveBeenCalledTimes(1);
    expect(methodValidationName).toHaveBeenCalledTimes(1);
    expect(methodValidationPassword).toHaveBeenCalledTimes(1);
    expect(methodExistsEmail).toHaveBeenCalledTimes(1);
    expect(methodSave).toHaveBeenCalledTimes(0);
  });

  /* *************************************** */
});

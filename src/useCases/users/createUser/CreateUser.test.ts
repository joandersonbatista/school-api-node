import { utilsUserTesting } from "../../../utils/UtilsUserTesting";
import { CreateUser } from "./CreateUser";
import { ICreateUserDTO } from "./ICreateUserDTO";

const createUser = new CreateUser(
  utilsUserTesting.getRepository(),
  utilsUserTesting.userCreateValidations,
); // sut
let userData: ICreateUserDTO;
const expectContainKeys = ["id", "name", "email", "password"];

afterAll(async () => {
  await utilsUserTesting.deleteData();
});

describe("Create user", () => {
  // todas Possibilidades de retorno da criação de um usuário..

  it("must be able to create user", async () => {
    userData = utilsUserTesting.data;
    await expect(createUser.execute(userData)).resolves.toContainKeys(
      expectContainKeys,
    );
  });

  it("it is not possible to create user, user already exists", async () => {
    userData.password = "123456"; //

    await expect(createUser.execute(userData)).rejects.toThrow(
      "E-mail already exists",
    );
  });

  /* *************************************** */
});

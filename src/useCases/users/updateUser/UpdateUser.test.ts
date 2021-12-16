import { utilsUserTesting } from "../../../utils/UtilsUserTesting";
import { IUpdateUserDTO } from "./IUpdateUserDTO";
import { UpdateUser } from "./UpdateUser";

const updateUser = new UpdateUser(
  utilsUserTesting.getRepository(),
  utilsUserTesting.userUpdateValidations,
);
let userData: IUpdateUserDTO;

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
  });

  it("should return error 'email already existing' when trying to update", async () => {
    userData.email = "emailExists@gmail.com";
    userData.password = "123456";
    await expect(updateUser.execute(userData)).rejects.toThrow(
      "E-mail already exists",
    );
  });

  it("should be able to update the email", async () => {
    userData.email = "email_update@gmail.com";
    userData.password = "123456";
    await expect(updateUser.execute(userData)).resolves.not.toThrow();
  });

  it("should return 'non-existent user' error, because id does not exist in database", async () => {
    await utilsUserTesting.deleteData();
    await expect(updateUser.execute(userData)).rejects.toThrow(
      "non-existent user",
    );
  });
});

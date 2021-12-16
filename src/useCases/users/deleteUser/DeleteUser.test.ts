import { utilsUserTesting } from "../../../utils/UtilsUserTesting";
import { DeleteUser } from "./DeleteUser";
import { IDeletedUserDTO } from "./IDeleteUserDTO";

let deleteUser = new DeleteUser(utilsUserTesting.getRepository()); // sut
let userData: IDeletedUserDTO; // contém o id para excluir o usuário

beforeAll(async () => {
  const id = (await utilsUserTesting.createData()).id;
  userData = { id };
});

afterAll(async () => {
  await utilsUserTesting.deleteData();
});

describe("delete user", () => {
  // todas Possibilidades de retorno da exclusão de um usuário..

  it("it must be possible to delete user", async () => {
    await expect(
      deleteUser.execute(userData as IDeletedUserDTO),
    ).resolves.not.toThrow();
  });

  it("Must not have user and throw 'user does not exist' error", async () => {
    await utilsUserTesting.deleteData();

    await expect(
      deleteUser.execute(userData as IDeletedUserDTO),
    ).rejects.toThrow("user does not exist");
  });

  /* *************************************** */
});

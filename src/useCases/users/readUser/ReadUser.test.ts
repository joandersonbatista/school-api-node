import { IUsersAttributes } from "../../../models/IUserAttributes";
import { utilsUserTesting } from "../../../utils/UtilsUserTesting";
import { IReadUserDTO } from "./IReadUserDTO";
import { ReadUser } from "./ReadUser";

let userData: IReadUserDTO; // contém o id para ler o usuário
let readUser = new ReadUser(utilsUserTesting.getRepository()); // sut
let expectReturn: IUsersAttributes[];
// spy methods
let methodExistsId = jest.spyOn(utilsUserTesting.getRepository(), "existsId");
let methodRead = jest.spyOn(utilsUserTesting.getRepository(), "read");

beforeAll(async () => {
  const { id } = await utilsUserTesting.createData();
  userData = { id };
  expectReturn = await utilsUserTesting.getRepository().read(userData.id);
});

afterAll(async () => {
  await utilsUserTesting.deleteData();
});

describe("read user", () => {
  it("it must be possible to read user and return user", async () => {
    await expect(readUser.execute(userData)).resolves.toStrictEqual(
      expectReturn,
    );
    expect(methodExistsId).toHaveBeenCalledTimes(1);
    expect(methodRead).toHaveBeenCalledTimes(1);
  });

  it("must not read user, because user does not exist", async () => {
    await utilsUserTesting.deleteData();

    await expect(readUser.execute(userData)).rejects.toThrow(
      "user does not exist",
    );
    expect(methodExistsId).toHaveBeenCalledTimes(1);
    expect(methodRead).toHaveBeenCalledTimes(0);
  });
});

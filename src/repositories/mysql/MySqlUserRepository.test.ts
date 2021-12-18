import { utilsUserTesting } from "../../utils/UtilsUserTesting";
import { MysqlUserRepository } from "./MySqlUserRepository";
import { IUpdateUserDTO } from "../../useCases/users/updateUser/IUpdateUserDTO";

const mysqlUserRepository = new MysqlUserRepository();
const userData = utilsUserTesting.data;
let id: number;
const expectContainKeys = [
  "id",
  "name",
  "email",
  "password",
  "created_at",
  "updated_at",
];

beforeEach(async () => {
  id = (await mysqlUserRepository.save(utilsUserTesting.data)).id as number;
});

afterEach(async () => {
  await utilsUserTesting.deleteData();
});

describe("mysql user repository", () => {
  it("must be possible create user", async () => {
    await utilsUserTesting.deleteData();

    await expect(mysqlUserRepository.save(userData)).resolves.toContainKeys(
      expectContainKeys,
    );
  });

  it("must verify an existing email in the database", async () => {
    await expect(
      mysqlUserRepository.existsEmail(userData.email),
    ).resolves.toContainKeys(expectContainKeys);
  });

  it("must verify an non-existing email in the database", async () => {
    await utilsUserTesting.deleteData();

    await expect(
      mysqlUserRepository.existsEmail(userData.email),
    ).resolves.toBeNull();
  });

  it("must delete user by id", async () => {
    await expect(mysqlUserRepository.delete(id)).resolves.not.toThrow();
  });

  it("must verify an existing id in the database", async () => {
    await expect(mysqlUserRepository.existsId(id)).resolves.toContainKeys(
      expectContainKeys,
    );
  });

  it("must verify an non-existing id in the database and return null", async () => {
    await utilsUserTesting.deleteData();

    await expect(mysqlUserRepository.existsId(id)).resolves.toBeNull();
  });

  it("it must be possible to read a user", async () => {
    await expect(mysqlUserRepository.read(id)).resolves.toBeArray();
  });

  it("it must be possible to update a user", async () => {
    await expect(
      mysqlUserRepository.update(userData as IUpdateUserDTO, id),
    ).resolves.toBeUndefined();
  });

  it("must check if there is a user with token", async () => {
    await expect(
      mysqlUserRepository.existsUserToken(id, userData.email),
    ).resolves.toContainKeys(expectContainKeys);
  });

  it("must check for a user with token and return null", async () => {
    await utilsUserTesting.deleteData();

    await expect(
      mysqlUserRepository.existsUserToken(id, userData.email),
    ).resolves.toBeNull();
  });
});

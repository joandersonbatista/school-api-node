import { utilsUserTesting } from "../../utils/UtilsUserTesting";
import { MongoDbUserRepository } from "./MongoDbUserRepository";
import { IUpdateUserDTO } from "../../useCases/users/updateUser/IUpdateUserDTO";

const mongoDbUserRepository = new MongoDbUserRepository();
const userData = utilsUserTesting.data;
let id: string;

beforeEach(async () => {
  id = (await mongoDbUserRepository.save(utilsUserTesting.data)).id as string;
});

afterEach(async () => {
  await utilsUserTesting.deleteData();
});

describe("mongoDb user repository", () => {
  it("must be possible create user", async () => {
    await utilsUserTesting.deleteData();

    await expect(mongoDbUserRepository.save(userData)).resolves.toBeObject();
  });

  it("must verify an existing email in the database", async () => {
    await expect(
      mongoDbUserRepository.existsEmail(userData.email),
    ).resolves.toBeObject();
  });

  it("must verify an non-existing email in the database", async () => {
    await utilsUserTesting.deleteData();

    await expect(
      mongoDbUserRepository.existsEmail(userData.email),
    ).resolves.toBeNull();
  });

  it("must delete user by id", async () => {
    await expect(mongoDbUserRepository.delete(id)).resolves.not.toThrow();
  });

  it("must verify an existing id in the database", async () => {
    await expect(mongoDbUserRepository.existsId(id)).resolves.toBeObject();
  });

  it("must verify an non-existing id in the database and return null", async () => {
    await utilsUserTesting.deleteData();

    await expect(mongoDbUserRepository.existsId(id)).resolves.toBeNull();
  });

  it("it must be possible to read a user", async () => {
    await expect(mongoDbUserRepository.read(id)).resolves.toBeArray();
  });

  it("it must be possible to update a user", async () => {
    await expect(
      mongoDbUserRepository.update(userData as IUpdateUserDTO, id),
    ).resolves.toBeUndefined();
  });

  it("must check if there is a user with token", async () => {
    await expect(
      mongoDbUserRepository.existsUserToken(id, userData.email),
    ).resolves.toBeObject();
  });

  it("must check for a user with token and return null", async () => {
    await utilsUserTesting.deleteData();

    await expect(
      mongoDbUserRepository.existsUserToken(id, userData.email),
    ).resolves.toBeNull();
  });
});

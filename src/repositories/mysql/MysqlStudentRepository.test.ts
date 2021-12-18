import { IUpdateStudentDTO } from "../../useCases/students/UpdateStudent/IUpdateStudentDTO";
import { utilsStudentTesting } from "../../utils/UtilsStudentTesting";
import { MysqlStudentRepository } from "./MysqlStudentRepository";

const mysqlStudentRepository = new MysqlStudentRepository();
const studentData = utilsStudentTesting.data;
let id: number;
const expectContainKeys = [
  "id",
  "name",
  "age",
  "height",
  "weight",
  "last_name",
  "profile_picture",
  "email",
  "created_at",
  "updated_at",
];

beforeEach(async () => {
  id = (await utilsStudentTesting.createStudentData()).id as number;
});

afterEach(async () => {
  await utilsStudentTesting.deleteStudentData();
});

describe("mysql student repository", () => {
  it("must be possible create student", async () => {
    await utilsStudentTesting.deleteStudentData();

    await expect(
      mysqlStudentRepository.save(studentData),
    ).resolves.toContainKeys(expectContainKeys);
  });

  it("must verify an existing email in the database", async () => {
    await expect(
      mysqlStudentRepository.existsEmail(studentData.email),
    ).resolves.toContainKeys(expectContainKeys);
  });

  it("must verify an non-existing email in the database", async () => {
    await utilsStudentTesting.deleteStudentData();

    await expect(
      mysqlStudentRepository.existsEmail(studentData.email),
    ).resolves.toBeNull();
  });

  it("must delete user by id", async () => {
    await expect(mysqlStudentRepository.delete(id)).resolves.not.toThrow();
  });

  it("must verify an existing id in the database", async () => {
    await expect(mysqlStudentRepository.existsId(id)).resolves.toContainKeys(
      expectContainKeys,
    );
  });

  it("must verify an non-existing id in the database and return null", async () => {
    await utilsStudentTesting.deleteStudentData();

    await expect(mysqlStudentRepository.existsId(id)).resolves.toBeNull();
  });

  it("must read one or more students", async () => {
    await expect(mysqlStudentRepository.read(id)).resolves.toBeArray();
    await expect(mysqlStudentRepository.read()).resolves.toBeArray();
  });

  it("it must be possible to update a student", async () => {
    await expect(
      mysqlStudentRepository.update(studentData as IUpdateStudentDTO, id),
    ).resolves.toContainKeys(expectContainKeys);
  });
});

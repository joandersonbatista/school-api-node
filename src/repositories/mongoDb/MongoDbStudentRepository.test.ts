import { IUpdateStudentDTO } from "../../useCases/students/UpdateStudent/IUpdateStudentDTO";
import { utilsStudentTesting } from "../../utils/UtilsStudentTesting";
import { MongoDbStudentRepository } from "./MongoDbStudentRepository";

const mongoDbStudentRepository = new MongoDbStudentRepository();
const studentData = utilsStudentTesting.data;
let id: string;

beforeEach(async () => {
  id = (await mongoDbStudentRepository.save(studentData)).id as string;
});

afterEach(async () => {
  await utilsStudentTesting.deleteStudentData();
});

describe("mongoDb student repository", () => {
  it("must be possible create student", async () => {
    await utilsStudentTesting.deleteStudentData();

    await expect(
      mongoDbStudentRepository.save(studentData),
    ).resolves.toBeObject();
  });

  it("must verify an existing email in the database", async () => {
    await expect(
      mongoDbStudentRepository.existsEmail(studentData.email),
    ).resolves.toBeObject();
  });

  it("must verify an non-existing email in the database", async () => {
    await utilsStudentTesting.deleteStudentData();

    await expect(
      mongoDbStudentRepository.existsEmail(studentData.email),
    ).resolves.toBeNull();
  });

  it("must delete user by id", async () => {
    await expect(mongoDbStudentRepository.delete(id)).resolves.not.toThrow();
  });

  it("must verify an existing id in the database", async () => {
    await expect(mongoDbStudentRepository.existsId(id)).resolves.toBeObject();
  });

  it("must verify an non-existing id in the database and return null", async () => {
    await utilsStudentTesting.deleteStudentData();

    await expect(mongoDbStudentRepository.existsId(id)).resolves.toBeNull();
  });

  it("must read one or more students", async () => {
    await expect(mongoDbStudentRepository.read(id)).resolves.toBeArray();
    await expect(mongoDbStudentRepository.read()).resolves.toBeArray();
  });

  it("it must be possible to update a student", async () => {
    await expect(
      mongoDbStudentRepository.update(studentData as IUpdateStudentDTO, id),
    ).resolves.toBeObject();
  });
});

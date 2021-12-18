import { IProfilePictureAttributes } from "../../models/IProfilePictureAttributes";
import { CreateProfilePicture } from "../../useCases/profilePicture/CreateProfilePicture/CreateProfilePicture";
import { ICreateProfilePictureDTO } from "../../useCases/profilePicture/CreateProfilePicture/ICreateProfilePictureDTO";
import { utilsStudentTesting } from "../../utils/UtilsStudentTesting";
import { MysqlProfilePictureRepository } from "./MysqlProfilePictureRepository";
import { MysqlStudentRepository } from "./MysqlStudentRepository";

const mysqlProfilePicture = new MysqlProfilePictureRepository();
const mysqlStudentRepository = new MysqlStudentRepository();
const createProfilePicture = new CreateProfilePicture(
  mysqlProfilePicture,
  utilsStudentTesting.storageServiceProfilePicture,
);
let profilePictureCreated: Omit<
  IProfilePictureAttributes,
  "id" | "created_at" | "updated_at"
>;
let student_id: number;

const expectContainKeys = [
  "id",
  "fieldname",
  "originalname",
  "mimetype",
  "filename",
  "size",
  "url",
  "student_id",
  "created_at",
  "updated_at",
];

beforeEach(async () => {
  student_id = (await mysqlStudentRepository.save(utilsStudentTesting.data))
    .id as number;
  profilePictureCreated = await createProfilePicture.create(
    utilsStudentTesting.picture,
    student_id,
  );
});

afterEach(async () => {
  await utilsStudentTesting.deleteStudentData();
});

describe("mysql profile picture repository", () => {
  it("must be possible create profile picture", async () => {
    await utilsStudentTesting.deleteProfilePictureData();

    await expect(
      mysqlProfilePicture.save(
        profilePictureCreated as ICreateProfilePictureDTO,
      ),
    ).resolves.toContainKeys(expectContainKeys);
  });

  it("must be possible update profile picture", async () => {
    await expect(
      mysqlProfilePicture.update(profilePictureCreated, student_id),
    ).resolves.toBeUndefined();
  });

  it("must be possible delete profile picture", async () => {
    await expect(
      mysqlProfilePicture.delete(student_id),
    ).resolves.toBeUndefined();
  });

  it("must return an existing profile picture", async () => {
    await expect(
      mysqlProfilePicture.existsProfilePicture(student_id),
    ).resolves.toContainKeys(expectContainKeys);
  });

  it("must return a non-existing profile picture", async () => {
    await utilsStudentTesting.deleteProfilePictureData();

    await expect(
      mysqlProfilePicture.existsProfilePicture(student_id),
    ).resolves.toBeNull();
  });
});

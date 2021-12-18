import { IProfilePictureAttributes } from "../../models/IProfilePictureAttributes";
import { CreateProfilePicture } from "../../useCases/profilePicture/CreateProfilePicture/CreateProfilePicture";
import { ICreateProfilePictureDTO } from "../../useCases/profilePicture/CreateProfilePicture/ICreateProfilePictureDTO";
import { utilsStudentTesting } from "../../utils/UtilsStudentTesting";
import { MongoDbProfilePictureRepository } from "./MongoDbProfilePictureRepository";
import { MongoDbStudentRepository } from "./MongoDbStudentRepository";

const mongoDbStudentRepository = new MongoDbStudentRepository();
const mongoProfilePicture = new MongoDbProfilePictureRepository();
const createProfilePicture = new CreateProfilePicture(
  mongoProfilePicture,
  utilsStudentTesting.storageServiceProfilePicture,
);
let profilePictureCreated: Omit<
  IProfilePictureAttributes,
  "id" | "created_at" | "updated_at"
>;
let student_id: string;

beforeEach(async () => {
  student_id = (await mongoDbStudentRepository.save(utilsStudentTesting.data))
    .id as string;
  const { fieldname, filename, mimetype, originalname, size, url } =
    await createProfilePicture.create(utilsStudentTesting.picture, student_id);

  profilePictureCreated = {
    student_id,
    fieldname,
    filename,
    mimetype,
    originalname,
    size,
    url,
  };
});

afterEach(async () => {
  await utilsStudentTesting.deleteStudentData();
});

describe("mongoDb profile picture repository", () => {
  it("must be possible create profile picture", async () => {
    await utilsStudentTesting.deleteProfilePictureData();
    await expect(
      mongoProfilePicture.save(
        profilePictureCreated as ICreateProfilePictureDTO,
      ),
    ).resolves.toBeObject();
  });

  it("must be possible update profile picture", async () => {
    await expect(
      mongoProfilePicture.update(profilePictureCreated, student_id),
    ).resolves.toBeObject();
  });

  it("must be possible delete profile picture", async () => {
    await expect(
      mongoProfilePicture.delete(student_id),
    ).resolves.toBeUndefined();
  });

  it("must return an existing profile picture", async () => {
    await expect(
      mongoProfilePicture.existsProfilePicture(student_id),
    ).resolves.toBeObject();
  });

  it("must return a non-existing profile picture", async () => {
    await utilsStudentTesting.deleteProfilePictureData();

    await expect(
      mongoProfilePicture.existsProfilePicture(student_id),
    ).resolves.toBeNull();
  });
});

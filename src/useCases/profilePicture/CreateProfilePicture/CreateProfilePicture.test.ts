import { utilsStudentTesting } from "../../../utils/UtilsStudentTesting";
import { CreateProfilePicture } from "./CreateProfilePicture";

const createProfilePicture = new CreateProfilePicture(
  utilsStudentTesting.getProfilePictureRepository(),
  utilsStudentTesting.storageServiceProfilePicture,
);
const profilePictureData = utilsStudentTesting.picture;
let student_id: number | string;
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

beforeAll(async () => {
  const { id } = await utilsStudentTesting.createStudentData();
  student_id = id;
});

afterAll(async () => {
  await utilsStudentTesting.deleteStudentData();
});

describe("create profile picture", () => {
  it("must be possible create profile picture", async () => {
    await expect(
      createProfilePicture.create(profilePictureData, student_id),
    ).resolves.toContainKeys(expectContainKeys);
  });
});

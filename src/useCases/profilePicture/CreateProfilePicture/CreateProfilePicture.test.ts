import { utilsStudentTesting } from "../../../utils/UtilsStudentTesting";
import { CreateProfilePicture } from "./CreateProfilePicture";

const createProfilePicture = new CreateProfilePicture(
  utilsStudentTesting.getProfilePictureRepository(),
  utilsStudentTesting.storageServiceProfilePicture,
);
const profilePictureData = utilsStudentTesting.picture;
let student_id: number | string;

// spy methods
const methodSaveFile = jest.spyOn(
  utilsStudentTesting.storageServiceProfilePicture,
  "saveFile",
);
const methodGetUrl = jest.spyOn(
  utilsStudentTesting.storageServiceProfilePicture,
  "getUrl",
);
const methodSave = jest.spyOn(
  utilsStudentTesting.profilePictureRepository,
  "save",
);
const methodObjectAssign = jest.spyOn(Object, "assign");

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
    ).resolves.not.toThrow();
    await expect(
      createProfilePicture.create(profilePictureData, student_id),
    ).resolves.toHaveProperty("id");
    expect(methodGetUrl).toHaveBeenCalledTimes(2);
    expect(methodSaveFile).toHaveBeenCalledTimes(2);
    expect(methodSave).toHaveBeenCalledTimes(2);
    expect(methodObjectAssign).toHaveBeenCalled();
  });
});

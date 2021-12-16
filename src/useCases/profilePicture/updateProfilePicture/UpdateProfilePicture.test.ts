import { utilsStudentTesting } from "../../../utils/UtilsStudentTesting";
import { IUpdateProfilePictureDTO } from "./IUpdateProfilePictureDTO";
import { UpdateProfilePicture } from "./UpdateProfilePicture";

const updateProfilePicture = new UpdateProfilePicture(
  utilsStudentTesting.getProfilePictureRepository(),
  utilsStudentTesting.storageServiceProfilePicture,
);

let profilePictureData: IUpdateProfilePictureDTO;
let student_id: number | string;

beforeAll(async () => {
  const { id } = await utilsStudentTesting.createStudentData();
  const profilePicture = await utilsStudentTesting.createProfilePictureData(id);
  student_id = id;
  profilePictureData = profilePicture;
});

afterAll(async () => {
  await utilsStudentTesting.deleteStudentData();
});

describe("update profile picture", () => {
  it("must be possible update profile picture", async () => {
    await expect(
      updateProfilePicture.execute(profilePictureData, student_id),
    ).resolves.toBeUndefined();
  });
});

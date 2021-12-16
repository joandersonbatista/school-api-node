import { utilsStudentTesting } from "../../../utils/UtilsStudentTesting";
import { DeleteProfilePicture } from "./DeleteProfilePicture";
import { IDeleteProfilePictureDTO } from "./IDeleteProfilePictureDTO";

const deleteProfilePicture = new DeleteProfilePicture(
  utilsStudentTesting.getProfilePictureRepository(),
  utilsStudentTesting.storageServiceProfilePicture,
);

let profilePictureData: IDeleteProfilePictureDTO;

beforeAll(async () => {
  const { id } = await utilsStudentTesting.createStudentData();
  profilePictureData = { student_id: id };
  await utilsStudentTesting.createProfilePictureData(id);
});

afterEach(async () => {
  await utilsStudentTesting.deleteStudentData();
});

describe("delete profile picture", () => {
  it("muste be possible delete profile picture", async () => {
    await expect(
      deleteProfilePicture.execute(profilePictureData),
    ).resolves.toBeUndefined();
  });

  it("should return undefined because there is no profile picture", async () => {
    const { id } = await utilsStudentTesting.createStudentData();
    profilePictureData = { student_id: id };

    await expect(
      deleteProfilePicture.execute(profilePictureData),
    ).resolves.toBeUndefined();
  });
});

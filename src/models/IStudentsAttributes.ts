import { IProfilePictureAttributes } from "./IProfilePictureAttributes";

interface IStudentsAttributes {
  id: number;
  name: string;
  last_name: string;
  email: string;
  age: number;
  weight: number;
  height: number;
  created_at: string;
  updated_at: string;
  profile_picture?: IProfilePictureAttributes | null;
}

export { IStudentsAttributes };

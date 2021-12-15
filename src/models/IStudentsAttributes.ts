import { IProfilePictureAttributes } from "./IProfilePictureAttributes";

interface IStudentsAttributes {
  id: number | string;
  name: string;
  last_name: string;
  email: string;
  age?: number | null;
  weight?: number | null;
  height?: number | null;
  created_at: string;
  updated_at: string;
  profile_picture?: IProfilePictureAttributes | null;
}

export { IStudentsAttributes };

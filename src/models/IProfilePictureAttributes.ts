import { Types } from 'mongoose';

interface IProfilePictureAttributes {
  id: number | string;
  fieldname: string;
  originalname: string;
  mimetype: string;
  filename: string;
  size: number;
  url: string;
  student_id: number | string | Types.ObjectId;
  created_at: string;
  updated_at: string;
}

export { IProfilePictureAttributes };

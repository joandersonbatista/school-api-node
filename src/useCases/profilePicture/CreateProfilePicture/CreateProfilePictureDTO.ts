interface ICreateProfilePictureDTO {
  fieldname: string;
  originalname: string;
  mimetype: string;
  filename: string;
  size: number;
  url: string;
  student_id: number | string;
}

export { ICreateProfilePictureDTO };

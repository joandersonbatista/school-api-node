interface ICreateProfilePicture {
  create(picture: Express.Multer.File, student_id: number | string): Promise<void>
}

export { ICreateProfilePicture };

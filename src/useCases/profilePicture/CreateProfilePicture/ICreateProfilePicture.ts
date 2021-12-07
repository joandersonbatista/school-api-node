interface ICreateProfilePicture {
  create(picture: Express.Multer.File, student_id: number): Promise<void>
}

export { ICreateProfilePicture };

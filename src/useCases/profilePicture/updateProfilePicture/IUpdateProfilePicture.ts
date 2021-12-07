interface IUpdateProfilePicture {
  execute(profilePicture: Express.Multer.File, id: number): Promise<void>;
}

export { IUpdateProfilePicture };

interface IUpdateProfilePicture {
  execute(profilePicture: Express.Multer.File, id: number | string): Promise<void>;
}

export { IUpdateProfilePicture };

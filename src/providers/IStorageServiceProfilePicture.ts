interface IStorageServiceProfilePicture {
  saveFile(filename: string): Promise<void>;
  deleteFile(filename: string): Promise<void>;
  getUrl(fileName: string): string;
}

export { IStorageServiceProfilePicture };

interface IUsersAttributes {
  id: number | string;
  name: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
  __v?: number; // attribute only from mongoDb
}

export { IUsersAttributes };

interface ICreateStudentDTO {
  name: string;
  last_name: string;
  email: string;
  age?: number;
  weight?: number;
  height?: number;
  profile_picture?: object;
}

export { ICreateStudentDTO };

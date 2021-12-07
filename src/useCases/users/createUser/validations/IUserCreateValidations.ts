import { ICreateUserDTO } from "../ICreateUserDTO";

interface IUserCreateValidations {
  validationEmail(user: ICreateUserDTO): void;
  validationName(user: ICreateUserDTO): void;
  validationPassword(user: ICreateUserDTO): void;
}

export { IUserCreateValidations };

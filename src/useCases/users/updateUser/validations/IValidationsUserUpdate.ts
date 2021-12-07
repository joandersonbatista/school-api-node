import { IUpdateUserDTO } from "../IUpdateUserDTO";

interface IValidationsUserUpdate {
  validationEmail(user: IUpdateUserDTO): void;
  validationName(user: IUpdateUserDTO): void;
  validationPassword(user: IUpdateUserDTO): void;
}

export { IValidationsUserUpdate };

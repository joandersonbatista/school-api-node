import { utilsUserTesting } from "../../../../utils/UtilsUserTesting";
import { ICreateUserDTO } from "../ICreateUserDTO";

let userData: ICreateUserDTO = utilsUserTesting.data;
let userCreateValidaions = utilsUserTesting.userCreateValidations;

describe("user validations", () => {
  // todas Possibilidades de retorno da validação do dados do usuário..

  // E-mail
  it("email must be valid", () => {
    expect(() => {
      userCreateValidaions.validationEmail(userData);
    }).not.toThrow();
  });

  it("must not be email", () => {
    userData.email = "not_email";
    expect(() => {
      userCreateValidaions.validationEmail(userData);
    }).toThrow("it's not email");
  });

  it("email must be empty", () => {
    userData.email = "";

    expect(() => {
      userCreateValidaions.validationEmail(userData);
    }).toThrow("E-mail is empty");
  });

  /* *************************************** */

  // Name
  it("name must be valid", () => {
    expect(() => {
      userCreateValidaions.validationName(userData);
    }).not.toThrow();
  });

  it("name must be empty", () => {
    userData.name = "";

    expect(() => {
      userCreateValidaions.validationName(userData);
    }).toThrow("Name is empty");
  });

  it("name must not be 3 to 255 characters long", () => {
    userData.name = "no";

    expect(() => {
      userCreateValidaions.validationName(userData);
    }).toThrow("Name must be from 3 to 255 characters");
  });

  /* *************************************** */

  // Password
  it("password must be valid", () => {
    expect(() => {
      userCreateValidaions.validationPassword(userData);
    }).not.toThrow();
  });

  it("password must be empty", () => {
    userData.password = "";

    expect(() => {
      userCreateValidaions.validationPassword(userData);
    }).toThrow("Password is empty");
  });

  it("password must not be 6 to 50 characters long", () => {
    userData.password = "12345";

    expect(() => {
      userCreateValidaions.validationPassword(userData);
    }).toThrow("Password must be from 6 to 50 characters");
  });

  /* *************************************** */
});

import validator from "validator";

import { utilsUserTesting } from "../../../../utils/UtilsUserTesting";
import { ICreateUserDTO } from "../ICreateUserDTO";

interface useDataTest {
  email: string | undefined;
  name: string | undefined;
  password: string | undefined;
}

let userData: useDataTest = utilsUserTesting.data;
let userCreateValidaions = utilsUserTesting.userCreateValidations;
// spy methods
let methodIsEmail = jest.spyOn(validator, "isEmail");
let methodIsEmpty = jest.spyOn(validator, "isEmpty");
let methodIsLength = jest.spyOn(validator, "isLength");

describe("user validations", () => {
  // todas Possibilidades de retorno da validação do dados do usuário..

  // E-mail
  it("email must be valid", () => {
    expect(() => {
      userCreateValidaions.validationEmail(userData as ICreateUserDTO);
    }).not.toThrow();

    expect(methodIsEmail).toHaveBeenCalledTimes(1);
    expect(methodIsEmpty).toHaveBeenCalledTimes(1);
  });

  it("email must be undefined", () => {
    delete userData.email;
    expect(() => {
      userCreateValidaions.validationEmail(userData as ICreateUserDTO);
    }).toThrow("E-mail is empty");

    expect(methodIsEmail).toHaveBeenCalledTimes(0);
    expect(methodIsEmpty).toHaveBeenCalledTimes(0);
  });

  it("must not be email", () => {
    userData.email = "not_email";
    expect(() => {
      userCreateValidaions.validationEmail(userData as ICreateUserDTO);
    }).toThrow("it's not email");

    expect(methodIsEmail).toHaveBeenCalledTimes(1);
    expect(methodIsEmpty).toHaveBeenCalledTimes(1);
  });

  it("email must be empty", () => {
    userData.email = "";

    expect(() => {
      userCreateValidaions.validationEmail(userData as ICreateUserDTO);
    }).toThrow("E-mail is empty");

    expect(methodIsEmail).toHaveBeenCalledTimes(1);
    expect(methodIsEmpty).toHaveBeenCalledTimes(1);
  });

  /* *************************************** */

  // Name
  it("name must be valid", () => {
    expect(() => {
      userCreateValidaions.validationName(userData as ICreateUserDTO);
    }).not.toThrow();

    expect(methodIsEmpty).toHaveBeenCalledTimes(1);
    expect(methodIsLength).toHaveBeenCalledTimes(1);
  });

  it("name must be undefined", () => {
    delete userData.name;
    expect(() => {
      userCreateValidaions.validationName(userData as ICreateUserDTO);
    }).toThrow("Name is empty");

    expect(methodIsEmpty).toHaveBeenCalledTimes(0);
    expect(methodIsLength).toHaveBeenCalledTimes(0);
  });

  it("name must be empty", () => {
    userData.name = "";

    expect(() => {
      userCreateValidaions.validationName(userData as ICreateUserDTO);
    }).toThrow("Name is empty");

    expect(methodIsEmpty).toHaveBeenCalledTimes(1);
    expect(methodIsLength).toHaveBeenCalledTimes(1);
  });

  it("name must not be 3 to 255 characters long", () => {
    userData.name = "no";

    expect(() => {
      userCreateValidaions.validationName(userData as ICreateUserDTO);
    }).toThrow("Name must be from 3 to 255 characters");

    expect(methodIsEmpty).toHaveBeenCalledTimes(1);
    expect(methodIsLength).toHaveBeenCalledTimes(1);
  });

  /* *************************************** */

  // Password
  it("password must be valid", () => {
    expect(() => {
      userCreateValidaions.validationPassword(userData as ICreateUserDTO);
    }).not.toThrow();

    expect(methodIsEmpty).toHaveBeenCalledTimes(1);
    expect(methodIsLength).toHaveBeenCalledTimes(1);
  });

  it("password must be undefined", () => {
    delete userData.password;

    expect(() => {
      userCreateValidaions.validationPassword(userData as ICreateUserDTO);
    }).toThrow("Password is empty");

    expect(methodIsEmpty).toHaveBeenCalledTimes(0);
    expect(methodIsLength).toHaveBeenCalledTimes(0);
  });

  it("password must be empty", () => {
    userData.password = "";

    expect(() => {
      userCreateValidaions.validationPassword(userData as ICreateUserDTO);
    }).toThrow("Password is empty");

    expect(methodIsEmpty).toHaveBeenCalledTimes(1);
    expect(methodIsLength).toHaveBeenCalledTimes(1);
  });

  it("password must not be 6 to 50 characters long", () => {
    userData.password = "12345";

    expect(() => {
      userCreateValidaions.validationPassword(userData as ICreateUserDTO);
    }).toThrow("Password must be from 6 to 50 characters");

    expect(methodIsEmpty).toHaveBeenCalledTimes(1);
    expect(methodIsLength).toHaveBeenCalledTimes(1);
  });

  /* *************************************** */
});

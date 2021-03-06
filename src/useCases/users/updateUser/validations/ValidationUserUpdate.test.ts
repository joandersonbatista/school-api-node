import { utilsUserTesting } from "../../../../utils/UtilsUserTesting";
import { IUpdateUserDTO } from "../IUpdateUserDTO";
import { ValidationsUserUpdate } from "./ValidationsUserUpdate";

interface useDataTest {
  email?: string;
  name?: string;
  password?: string;
}

let userData: useDataTest = utilsUserTesting.data;
let validationUserUpdate = new ValidationsUserUpdate();

describe("user validations", () => {
  // todas Possibilidades de retorno da validação do dados do usuário..

  // E-mail
  it("should return undefined, as email is not required", () => {
    expect(() => {
      validationUserUpdate.validationEmail(userData as IUpdateUserDTO);
    }).not.toThrow();
  });

  it("email must be undefined", () => {
    delete userData.email;
    expect(() => {
      validationUserUpdate.validationEmail(userData as IUpdateUserDTO);
    }).not.toThrow();
  });

  it("must not be email", () => {
    userData.email = "not_email";
    expect(() => {
      validationUserUpdate.validationEmail(userData as IUpdateUserDTO);
    }).toThrow("it's not email");
  });

  it("email must be empty", () => {
    userData.email = "";

    expect(() => {
      validationUserUpdate.validationEmail(userData as IUpdateUserDTO);
    }).toThrow("E-mail is empty");
  });

  /* *************************************** */

  // Name
  it("name must be valid", () => {
    expect(() => {
      validationUserUpdate.validationName(userData as IUpdateUserDTO);
    }).not.toThrow();
  });

  it("should return undefined, as name is not required.", () => {
    delete userData.name;
    expect(() => {
      validationUserUpdate.validationName(userData as IUpdateUserDTO);
    }).not.toThrow();
  });

  it("name must be empty", () => {
    userData.name = "";

    expect(() => {
      validationUserUpdate.validationName(userData as IUpdateUserDTO);
    }).toThrow("Name is empty");
  });

  it("name must not be 3 to 255 characters long", () => {
    userData.name = "no";

    expect(() => {
      validationUserUpdate.validationName(userData as IUpdateUserDTO);
    }).toThrow("Name must be from 3 to 255 characters");
  });

  /* *************************************** */

  // Password
  it("password must be valid", () => {
    expect(() => {
      validationUserUpdate.validationPassword(userData as IUpdateUserDTO);
    }).not.toThrow();
  });

  it("should return undefined, as name is not required.", () => {
    delete userData.password;

    expect(() => {
      validationUserUpdate.validationPassword(userData as IUpdateUserDTO);
    }).not.toThrow();
  });

  it("password must be empty", () => {
    userData.password = "";

    expect(() => {
      validationUserUpdate.validationPassword(userData as IUpdateUserDTO);
    }).toThrow("Password is empty");
  });

  it("password must not be 6 to 50 characters long", () => {
    userData.password = "12345";

    expect(() => {
      validationUserUpdate.validationPassword(userData as IUpdateUserDTO);
    }).toThrow("Password must be from 6 to 50 characters");
  });

  /* *************************************** */
});

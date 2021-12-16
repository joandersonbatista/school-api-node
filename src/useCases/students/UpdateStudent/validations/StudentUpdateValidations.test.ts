import validator from "validator";

import { utilsStudentTesting } from "../../../../utils/UtilsStudentTesting";
import { IUpdateStudentDTO } from "../IUpdateStudentDTO";

interface studentDataTest {
  email?: string;
  name?: string;
  last_name?: string;
  age?: number;
  weight?: number;
  height?: number;
}

let studentData: studentDataTest = utilsStudentTesting.data;

beforeEach(() => {
  studentData = utilsStudentTesting.data;
});

describe("user creation validations", () => {
  // E-mail
  it("must return error 'E-mail is empty'", () => {
    studentData.email = "";
    expect(() => {
      utilsStudentTesting.studentUpdateValidations.emailValidation(
        studentData as IUpdateStudentDTO,
      );
    }).toThrow("E-mail is empty");
  });

  it("the email must be undefined and must not return any error as it is optional", () => {
    delete studentData.email;

    expect(() => {
      utilsStudentTesting.studentUpdateValidations.emailValidation(
        studentData as IUpdateStudentDTO,
      );
    }).not.toThrow();
  });

  it("must not be email", () => {
    studentData.email = "not_email";
    expect(() => {
      utilsStudentTesting.studentUpdateValidations.emailValidation(
        studentData as IUpdateStudentDTO,
      );
    }).toThrow("it's not email");
  });

  /* *************************************** */

  // Name
  it("name must be valid", () => {
    expect(() => {
      utilsStudentTesting.studentUpdateValidations.nameValidation(
        studentData as IUpdateStudentDTO,
      );
    }).not.toThrow();
  });

  it("the name must be undefined and must not return any error as it is optional", () => {
    delete studentData.name;
    expect(() => {
      utilsStudentTesting.studentUpdateValidations.nameValidation(
        studentData as IUpdateStudentDTO,
      );
    }).not.toThrow();
  });

  it("name must be empty", () => {
    studentData.name = "";

    expect(() => {
      utilsStudentTesting.studentUpdateValidations.nameValidation(
        studentData as IUpdateStudentDTO,
      );
    }).toThrow("Name is empty");
  });

  it("name must not be 3 to 255 characters long", () => {
    studentData.name = "no";

    expect(() => {
      utilsStudentTesting.studentUpdateValidations.nameValidation(
        studentData as IUpdateStudentDTO,
      );
    }).toThrow("Name must be from 3 to 255 characters");
  });

  /* *************************************** */

  // Last name
  it("last name must be valid", () => {
    expect(() => {
      utilsStudentTesting.studentUpdateValidations.lastNameValidation(
        studentData as IUpdateStudentDTO,
      );
    }).not.toThrow();
  });

  it("Last name must be undefined and must not return any error as it is optional", () => {
    delete studentData.last_name;
    expect(() => {
      utilsStudentTesting.studentUpdateValidations.lastNameValidation(
        studentData as IUpdateStudentDTO,
      );
    }).not.toThrow();
  });

  it("last name must be empty", () => {
    studentData.last_name = "";

    expect(() => {
      utilsStudentTesting.studentUpdateValidations.lastNameValidation(
        studentData as IUpdateStudentDTO,
      );
    }).toThrow("Last name is empty");
  });

  it("name must not be 3 to 255 characters long", () => {
    studentData.last_name = "no";

    expect(() => {
      utilsStudentTesting.studentUpdateValidations.lastNameValidation(
        studentData as IUpdateStudentDTO,
      );
    }).toThrow("Last name must be from 3 to 255 characters");
  });

  // Age
  it("age name must be valid", () => {
    expect(() => {
      utilsStudentTesting.studentUpdateValidations.ageValidation(
        studentData as IUpdateStudentDTO,
      );
    }).not.toThrow();
  });

  it("must return error 'The age has to be Integer type'", () => {
    studentData.age = 20.4;
    expect(() => {
      utilsStudentTesting.studentUpdateValidations.ageValidation(
        studentData as IUpdateStudentDTO,
      );
    }).toThrow("The age has to be Integer type");
  });

  // Height
  it("height name must be valid", () => {
    expect(() => {
      utilsStudentTesting.studentUpdateValidations.heightValidation(
        studentData as IUpdateStudentDTO,
      );
    }).not.toThrow();
  });

  it("must return error 'The height has to be float type'", () => {
    studentData.height = 180;
    expect(() => {
      utilsStudentTesting.studentUpdateValidations.heightValidation(
        studentData as IUpdateStudentDTO,
      );
    }).toThrow("The height has to be float type");
  });

  // Weight
  it("Weight must be valid", () => {
    expect(() => {
      utilsStudentTesting.studentUpdateValidations.weightValidation(
        studentData as IUpdateStudentDTO,
      );
    }).not.toThrow();
  });

  it("must return error 'The weight has to be float type'", () => {
    studentData.weight = 180;
    expect(() => {
      utilsStudentTesting.studentUpdateValidations.weightValidation(
        studentData as IUpdateStudentDTO,
      );
    }).toThrow("The weight has to be float type");
  });
});

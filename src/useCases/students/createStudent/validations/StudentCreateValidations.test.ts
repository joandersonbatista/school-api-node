import validator from "validator";

import { utilsStudentTesting } from "../../../../utils/UtilsStudentTesting";
import { ICreateStudentDTO } from "../ICreateStudentDTO";

interface studentDataTest {
  email?: string;
  name?: string;
  last_name?: string;
  age?: number;
  weight?: number;
  height?: number;
}

let studentData: studentDataTest = utilsStudentTesting.data;
// spy methods
const methodIsNumber = jest.spyOn(Number, "isInteger");
const methodIsEmail = jest.spyOn(validator, "isEmail");
const methodIsEmpty = jest.spyOn(validator, "isEmpty");
const methodIsLength = jest.spyOn(validator, "isLength");

beforeEach(() => {
  studentData = utilsStudentTesting.data;
});

describe("user creation validations", () => {
  // E-mail
  it("must return error 'E-mail is empty'", () => {
    studentData.email = "";
    expect(() => {
      utilsStudentTesting.studentCreateValidations.emailValidation(
        studentData as ICreateStudentDTO,
      );
    }).toThrow("E-mail is empty");

    expect(methodIsEmail).toHaveBeenCalledTimes(1);
    expect(methodIsEmpty).toHaveBeenCalledTimes(1);
  });

  it("email must be undefined", () => {
    delete studentData.email;

    expect(() => {
      utilsStudentTesting.studentCreateValidations.emailValidation(
        studentData as ICreateStudentDTO,
      );
    }).toThrow("E-mail is empty");

    expect(methodIsEmail).toHaveBeenCalledTimes(0);
    expect(methodIsEmpty).toHaveBeenCalledTimes(0);
  });

  it("must not be email", () => {
    studentData.email = "not_email";
    expect(() => {
      utilsStudentTesting.studentCreateValidations.emailValidation(
        studentData as ICreateStudentDTO,
      );
    }).toThrow("it's not email");

    expect(methodIsEmail).toHaveBeenCalledTimes(1);
    expect(methodIsEmpty).toHaveBeenCalledTimes(1);
  });

  /* *************************************** */

  // Name
  it("name must be valid", () => {
    expect(() => {
      utilsStudentTesting.studentCreateValidations.nameValidation(
        studentData as ICreateStudentDTO,
      );
    }).not.toThrow();

    expect(methodIsEmpty).toHaveBeenCalledTimes(1);
    expect(methodIsLength).toHaveBeenCalledTimes(1);
  });

  it("must return error 'Name is empty'", () => {
    delete studentData.name;
    expect(() => {
      utilsStudentTesting.studentCreateValidations.nameValidation(
        studentData as ICreateStudentDTO,
      );
    }).toThrow("Name is empty");

    expect(methodIsEmpty).toHaveBeenCalledTimes(0);
    expect(methodIsLength).toHaveBeenCalledTimes(0);
  });

  it("name must be empty", () => {
    studentData.name = "";

    expect(() => {
      utilsStudentTesting.studentCreateValidations.nameValidation(
        studentData as ICreateStudentDTO,
      );
    }).toThrow("Name is empty");

    expect(methodIsEmpty).toHaveBeenCalledTimes(1);
    expect(methodIsLength).toHaveBeenCalledTimes(1);
  });

  it("name must not be 3 to 255 characters long", () => {
    studentData.name = "no";

    expect(() => {
      utilsStudentTesting.studentCreateValidations.nameValidation(
        studentData as ICreateStudentDTO,
      );
    }).toThrow("Name must be from 3 to 255 characters");

    expect(methodIsEmpty).toHaveBeenCalledTimes(1);
    expect(methodIsLength).toHaveBeenCalledTimes(1);
  });

  /* *************************************** */

  // Last name
  it("last name must be valid", () => {
    expect(() => {
      utilsStudentTesting.studentCreateValidations.lastNameValidation(
        studentData as ICreateStudentDTO,
      );
    }).not.toThrow();

    expect(methodIsEmpty).toHaveBeenCalledTimes(1);
    expect(methodIsLength).toHaveBeenCalledTimes(1);
  });

  it("must return error 'Name is empty'", () => {
    delete studentData.last_name;
    expect(() => {
      utilsStudentTesting.studentCreateValidations.lastNameValidation(
        studentData as ICreateStudentDTO,
      );
    }).toThrow("Last name is empty");

    expect(methodIsEmpty).toHaveBeenCalledTimes(0);
    expect(methodIsLength).toHaveBeenCalledTimes(0);
  });

  it("name must be empty", () => {
    studentData.last_name = "";

    expect(() => {
      utilsStudentTesting.studentCreateValidations.lastNameValidation(
        studentData as ICreateStudentDTO,
      );
    }).toThrow("Last name is empty");

    expect(methodIsEmpty).toHaveBeenCalledTimes(1);
    expect(methodIsLength).toHaveBeenCalledTimes(1);
  });

  it("name must not be 3 to 255 characters long", () => {
    studentData.last_name = "no";

    expect(() => {
      utilsStudentTesting.studentCreateValidations.lastNameValidation(
        studentData as ICreateStudentDTO,
      );
    }).toThrow("Last name must be from 3 to 255 characters");

    expect(methodIsEmpty).toHaveBeenCalledTimes(1);
    expect(methodIsLength).toHaveBeenCalledTimes(1);
  });

  // Age
  it("age name must be valid", () => {
    expect(() => {
      utilsStudentTesting.studentCreateValidations.ageValidation(
        studentData as ICreateStudentDTO,
      );
    }).not.toThrow();

    expect(methodIsNumber).toHaveBeenCalledTimes(1);
  });

  it("must return error 'The age has to be Integer type'", () => {
    studentData.age = 20.4;
    expect(() => {
      utilsStudentTesting.studentCreateValidations.ageValidation(
        studentData as ICreateStudentDTO,
      );
    }).toThrow("The age has to be Integer type");

    expect(methodIsNumber).toHaveBeenCalledTimes(1);
  });

  // Height
  it("height name must be valid", () => {
    expect(() => {
      utilsStudentTesting.studentCreateValidations.heightValidation(
        studentData as ICreateStudentDTO,
      );
    }).not.toThrow();
  });

  it("must return error 'The height has to be float type'", () => {
    studentData.height = 180;
    expect(() => {
      utilsStudentTesting.studentCreateValidations.heightValidation(
        studentData as ICreateStudentDTO,
      );
    }).toThrow("The height has to be float type");
  });

  // Weight
  it("Weight name must be valid", () => {
    expect(() => {
      utilsStudentTesting.studentCreateValidations.weightValidation(
        studentData as ICreateStudentDTO,
      );
    }).not.toThrow();
  });

  it("must return error 'The Weight has to be float type'", () => {
    studentData.weight = 180;
    expect(() => {
      utilsStudentTesting.studentCreateValidations.weightValidation(
        studentData as ICreateStudentDTO,
      );
    }).toThrow("The weight has to be float type");
  });
});

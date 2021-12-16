import { utilsStudentTesting } from "../../../../utils/UtilsStudentTesting";
import { ICreateStudentDTO } from "../ICreateStudentDTO";

let studentData: ICreateStudentDTO = utilsStudentTesting.data;

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
  });

  it("must not be email", () => {
    studentData.email = "not_email";
    expect(() => {
      utilsStudentTesting.studentCreateValidations.emailValidation(
        studentData as ICreateStudentDTO,
      );
    }).toThrow("it's not email");
  });

  /* *************************************** */

  // Name
  it("name must be valid", () => {
    expect(() => {
      utilsStudentTesting.studentCreateValidations.nameValidation(
        studentData as ICreateStudentDTO,
      );
    }).not.toThrow();
  });

  it("name must be empty", () => {
    studentData.name = "";

    expect(() => {
      utilsStudentTesting.studentCreateValidations.nameValidation(
        studentData as ICreateStudentDTO,
      );
    }).toThrow("Name is empty");
  });

  it("name must not be 3 to 255 characters long", () => {
    studentData.name = "no";

    expect(() => {
      utilsStudentTesting.studentCreateValidations.nameValidation(
        studentData as ICreateStudentDTO,
      );
    }).toThrow("Name must be from 3 to 255 characters");
  });

  /* *************************************** */

  // Last name
  it("last name must be valid", () => {
    expect(() => {
      utilsStudentTesting.studentCreateValidations.lastNameValidation(
        studentData as ICreateStudentDTO,
      );
    }).not.toThrow();
  });

  it("last name must be empty", () => {
    studentData.last_name = "";

    expect(() => {
      utilsStudentTesting.studentCreateValidations.lastNameValidation(
        studentData as ICreateStudentDTO,
      );
    }).toThrow("Last name is empty");
  });

  it("name must not be 3 to 255 characters long", () => {
    studentData.last_name = "no";

    expect(() => {
      utilsStudentTesting.studentCreateValidations.lastNameValidation(
        studentData as ICreateStudentDTO,
      );
    }).toThrow("Last name must be from 3 to 255 characters");
  });

  // Age
  it("age name must be valid", () => {
    expect(() => {
      utilsStudentTesting.studentCreateValidations.ageValidation(
        studentData as ICreateStudentDTO,
      );
    }).not.toThrow();
  });

  it("must return error 'The age has to be Integer type'", () => {
    studentData.age = 20.4;
    expect(() => {
      utilsStudentTesting.studentCreateValidations.ageValidation(
        studentData as ICreateStudentDTO,
      );
    }).toThrow("The age has to be Integer type");
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UtilsStudentTesting_1 = require("../../../../utils/UtilsStudentTesting");
let studentData = UtilsStudentTesting_1.utilsStudentTesting.data;
beforeEach(() => {
    studentData = UtilsStudentTesting_1.utilsStudentTesting.data;
});
describe("user creation validations", () => {
    // E-mail
    it("must return error 'E-mail is empty'", () => {
        studentData.email = "";
        expect(() => {
            UtilsStudentTesting_1.utilsStudentTesting.studentUpdateValidations.emailValidation(studentData);
        }).toThrow("E-mail is empty");
    });
    it("the email must be undefined and must not return any error as it is optional", () => {
        delete studentData.email;
        expect(() => {
            UtilsStudentTesting_1.utilsStudentTesting.studentUpdateValidations.emailValidation(studentData);
        }).not.toThrow();
    });
    it("must not be email", () => {
        studentData.email = "not_email";
        expect(() => {
            UtilsStudentTesting_1.utilsStudentTesting.studentUpdateValidations.emailValidation(studentData);
        }).toThrow("it's not email");
    });
    /* *************************************** */
    // Name
    it("name must be valid", () => {
        expect(() => {
            UtilsStudentTesting_1.utilsStudentTesting.studentUpdateValidations.nameValidation(studentData);
        }).not.toThrow();
    });
    it("the name must be undefined and must not return any error as it is optional", () => {
        delete studentData.name;
        expect(() => {
            UtilsStudentTesting_1.utilsStudentTesting.studentUpdateValidations.nameValidation(studentData);
        }).not.toThrow();
    });
    it("name must be empty", () => {
        studentData.name = "";
        expect(() => {
            UtilsStudentTesting_1.utilsStudentTesting.studentUpdateValidations.nameValidation(studentData);
        }).toThrow("Name is empty");
    });
    it("name must not be 3 to 255 characters long", () => {
        studentData.name = "no";
        expect(() => {
            UtilsStudentTesting_1.utilsStudentTesting.studentUpdateValidations.nameValidation(studentData);
        }).toThrow("Name must be from 3 to 255 characters");
    });
    /* *************************************** */
    // Last name
    it("last name must be valid", () => {
        expect(() => {
            UtilsStudentTesting_1.utilsStudentTesting.studentUpdateValidations.lastNameValidation(studentData);
        }).not.toThrow();
    });
    it("Last name must be undefined and must not return any error as it is optional", () => {
        delete studentData.last_name;
        expect(() => {
            UtilsStudentTesting_1.utilsStudentTesting.studentUpdateValidations.lastNameValidation(studentData);
        }).not.toThrow();
    });
    it("last name must be empty", () => {
        studentData.last_name = "";
        expect(() => {
            UtilsStudentTesting_1.utilsStudentTesting.studentUpdateValidations.lastNameValidation(studentData);
        }).toThrow("Last name is empty");
    });
    it("name must not be 3 to 255 characters long", () => {
        studentData.last_name = "no";
        expect(() => {
            UtilsStudentTesting_1.utilsStudentTesting.studentUpdateValidations.lastNameValidation(studentData);
        }).toThrow("Last name must be from 3 to 255 characters");
    });
    // Age
    it("age name must be valid", () => {
        expect(() => {
            UtilsStudentTesting_1.utilsStudentTesting.studentUpdateValidations.ageValidation(studentData);
        }).not.toThrow();
    });
    it("must return error 'The age has to be Integer type'", () => {
        studentData.age = 20.4;
        expect(() => {
            UtilsStudentTesting_1.utilsStudentTesting.studentUpdateValidations.ageValidation(studentData);
        }).toThrow("The age has to be Integer type");
    });
    // Height
    it("height name must be valid", () => {
        expect(() => {
            UtilsStudentTesting_1.utilsStudentTesting.studentUpdateValidations.heightValidation(studentData);
        }).not.toThrow();
    });
    it("must return error 'The height has to be float type'", () => {
        studentData.height = 180;
        expect(() => {
            UtilsStudentTesting_1.utilsStudentTesting.studentUpdateValidations.heightValidation(studentData);
        }).toThrow("The height has to be float type");
    });
    // Weight
    it("Weight must be valid", () => {
        expect(() => {
            UtilsStudentTesting_1.utilsStudentTesting.studentUpdateValidations.weightValidation(studentData);
        }).not.toThrow();
    });
    it("must return error 'The weight has to be float type'", () => {
        studentData.weight = 180;
        expect(() => {
            UtilsStudentTesting_1.utilsStudentTesting.studentUpdateValidations.weightValidation(studentData);
        }).toThrow("The weight has to be float type");
    });
});
//# sourceMappingURL=StudentUpdateValidations.test.js.map
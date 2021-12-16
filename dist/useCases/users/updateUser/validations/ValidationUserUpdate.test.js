"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UtilsUserTesting_1 = require("../../../../utils/UtilsUserTesting");
const ValidationsUserUpdate_1 = require("./ValidationsUserUpdate");
let userData = UtilsUserTesting_1.utilsUserTesting.data;
let validationUserUpdate = new ValidationsUserUpdate_1.ValidationsUserUpdate();
describe("user validations", () => {
    // todas Possibilidades de retorno da validação do dados do usuário..
    // E-mail
    it("should return undefined, as email is not required", () => {
        expect(() => {
            validationUserUpdate.validationEmail(userData);
        }).not.toThrow();
    });
    it("email must be undefined", () => {
        delete userData.email;
        expect(() => {
            validationUserUpdate.validationEmail(userData);
        }).not.toThrow();
    });
    it("must not be email", () => {
        userData.email = "not_email";
        expect(() => {
            validationUserUpdate.validationEmail(userData);
        }).toThrow("it's not email");
    });
    it("email must be empty", () => {
        userData.email = "";
        expect(() => {
            validationUserUpdate.validationEmail(userData);
        }).toThrow("E-mail is empty");
    });
    /* *************************************** */
    // Name
    it("name must be valid", () => {
        expect(() => {
            validationUserUpdate.validationName(userData);
        }).not.toThrow();
    });
    it("should return undefined, as name is not required.", () => {
        delete userData.name;
        expect(() => {
            validationUserUpdate.validationName(userData);
        }).not.toThrow();
    });
    it("name must be empty", () => {
        userData.name = "";
        expect(() => {
            validationUserUpdate.validationName(userData);
        }).toThrow("Name is empty");
    });
    it("name must not be 3 to 255 characters long", () => {
        userData.name = "no";
        expect(() => {
            validationUserUpdate.validationName(userData);
        }).toThrow("Name must be from 3 to 255 characters");
    });
    /* *************************************** */
    // Password
    it("password must be valid", () => {
        expect(() => {
            validationUserUpdate.validationPassword(userData);
        }).not.toThrow();
    });
    it("should return undefined, as name is not required.", () => {
        delete userData.password;
        expect(() => {
            validationUserUpdate.validationPassword(userData);
        }).not.toThrow();
    });
    it("password must be empty", () => {
        userData.password = "";
        expect(() => {
            validationUserUpdate.validationPassword(userData);
        }).toThrow("Password is empty");
    });
    it("password must not be 6 to 50 characters long", () => {
        userData.password = "12345";
        expect(() => {
            validationUserUpdate.validationPassword(userData);
        }).toThrow("Password must be from 6 to 50 characters");
    });
    /* *************************************** */
});
//# sourceMappingURL=ValidationUserUpdate.test.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFloat = exports.StudentCreateValidation = void 0;
const validator_1 = __importDefault(require("validator"));
function isFloat(num) {
    return Number(num) === num && num % 1 !== 0;
}
exports.isFloat = isFloat;
class StudentCreateValidation {
    emailValidation(student) {
        const isEmail = validator_1.default.isEmail(student.email);
        const emailIsEmpty = validator_1.default.isEmpty(student.email);
        if (emailIsEmpty)
            throw new Error("E-mail is empty");
        if (!isEmail)
            throw new Error("it's not email");
    }
    nameValidation(student) {
        const nameIsEmpty = validator_1.default.isEmpty(student.name);
        const nameSize = validator_1.default.isLength(student.name, { min: 3, max: 255 });
        if (nameIsEmpty)
            throw new Error("Name is empty");
        if (!nameSize)
            throw new Error("Name must be from 3 to 255 characters");
    }
    lastNameValidation(student) {
        const lastNameIsEmpty = validator_1.default.isEmpty(student.last_name);
        const lastNameSize = validator_1.default.isLength(student.last_name, {
            min: 3,
            max: 255,
        });
        if (lastNameIsEmpty)
            throw new Error("Last name is empty");
        if (!lastNameSize)
            throw new Error("Last name must be from 3 to 255 characters");
    }
    ageValidation(student) {
        if (student.age === undefined)
            return;
        const ageIsNumber = Number.isInteger(student.age);
        if (!ageIsNumber)
            throw new Error("The age has to be Integer type");
    }
    heightValidation(student) {
        if (student.height === undefined)
            return;
        if (!isFloat(student.height))
            throw new Error("The height has to be float type");
    }
    weightValidation(student) {
        if (student.weight === undefined)
            return;
        if (!isFloat(student.weight))
            throw new Error("The weight has to be float type");
    }
}
exports.StudentCreateValidation = StudentCreateValidation;
//# sourceMappingURL=StudentCreateValidations.js.map
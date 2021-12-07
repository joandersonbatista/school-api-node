"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentUpdateValidations = void 0;
const validator_1 = __importDefault(require("validator"));
class StudentUpdateValidations {
    emailValidation(student) {
        if (student.email === undefined)
            return;
        const isEmail = validator_1.default.isEmail(student.email);
        const emailIsEmpty = validator_1.default.isEmpty(student.email);
        if (emailIsEmpty)
            throw new Error("E-mail is empty");
        if (!isEmail)
            throw new Error("it's not email");
    }
    nameValidation(student) {
        if (student.name === undefined)
            return;
        const nameIsEmpty = validator_1.default.isEmpty(student.name);
        const nameSize = validator_1.default.isLength(student.name, { min: 3, max: 255 });
        if (nameIsEmpty)
            throw new Error("Name is empty");
        if (!nameSize)
            throw new Error("Name must be from 3 to 255 characters");
    }
    lastNameValidation(student) {
        if (student.last_name === undefined)
            return;
        const lastNameIsEmpty = validator_1.default.isEmpty(student.last_name);
        const lastNameSize = validator_1.default.isLength(student.last_name, { min: 3, max: 255 });
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
        const heightIsNumber = (height) => {
            return Number(height) === height && height % 1 !== 0;
        };
        if (!heightIsNumber)
            throw new Error("The age has to be float type");
    }
    weightValidation(student) {
        if (student.weight === undefined)
            return;
        const weightIsNumber = (weight) => {
            return Number(weight) === weight && weight % 1 !== 0;
        };
        if (!weightIsNumber)
            throw new Error("The weight has to be float type");
    }
}
exports.StudentUpdateValidations = StudentUpdateValidations;
//# sourceMappingURL=StudentUpdateValidations.js.map
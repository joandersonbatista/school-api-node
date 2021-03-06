"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationsUserUpdate = void 0;
const validator_1 = __importDefault(require("validator"));
class ValidationsUserUpdate {
    validationEmail(user) {
        if (user.email === undefined)
            return;
        const emailIsEmpty = validator_1.default.isEmpty(user.email);
        const isEmail = validator_1.default.isEmail(user.email);
        if (emailIsEmpty)
            throw new Error("E-mail is empty");
        if (!isEmail)
            throw new Error("it's not email");
    }
    validationName(user) {
        if (user.name === undefined)
            return;
        const nameIsEmpty = validator_1.default.isEmpty(user.name);
        const nameLength = validator_1.default.isLength(user.name, {
            max: 255,
            min: 3,
        });
        if (nameIsEmpty)
            throw new Error("Name is empty");
        if (!nameLength)
            throw new Error("Name must be from 3 to 255 characters");
    }
    validationPassword(user) {
        if (user.password === undefined)
            return;
        const passwordIsEmpty = validator_1.default.isEmpty(user.password);
        const passwordLength = validator_1.default.isLength(user.password, {
            max: 50,
            min: 6,
        });
        if (passwordIsEmpty)
            throw new Error("Password is empty");
        if (!passwordLength)
            throw new Error("Password must be from 6 to 50 characters");
    }
}
exports.ValidationsUserUpdate = ValidationsUserUpdate;
//# sourceMappingURL=ValidationsUserUpdate.js.map
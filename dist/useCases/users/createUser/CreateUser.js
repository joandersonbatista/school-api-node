"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class CreateUser {
    userRepository;
    userCreateValidations;
    constructor(userRepository, userCreateValidations) {
        this.userRepository = userRepository;
        this.userCreateValidations = userCreateValidations;
    }
    async execute(user) {
        this.userCreateValidations.validationEmail(user);
        this.userCreateValidations.validationName(user);
        this.userCreateValidations.validationPassword(user);
        const existsEmail = await this.userRepository.existsEmail(user.email);
        if (existsEmail !== null) {
            throw new Error("E-mail already exists");
        }
        const passwordHash = await bcryptjs_1.default.hash(user.password, 8);
        user.password = passwordHash;
        return await this.userRepository.save(user);
    }
}
exports.CreateUser = CreateUser;
//# sourceMappingURL=CreateUser.js.map
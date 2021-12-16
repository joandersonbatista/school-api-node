"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UpdateUser {
    userRepository;
    validationsUpdateUser;
    constructor(userRepository, validationsUpdateUser) {
        this.userRepository = userRepository;
        this.validationsUpdateUser = validationsUpdateUser;
    }
    async execute(user) {
        const existsId = await this.userRepository.existsId(user.id);
        if (existsId === null) {
            throw new Error("non-existent user");
        }
        this.validationsUpdateUser.validationEmail(user);
        this.validationsUpdateUser.validationName(user);
        this.validationsUpdateUser.validationPassword(user);
        const existsEmail = await this.userRepository.existsEmail(user.email || "");
        if (existsEmail !== null && existsEmail.id === user.id) {
            if (user.password !== undefined) {
                const passwordHash = await bcryptjs_1.default.hash(user.password, 8);
                user.password = passwordHash;
            }
            await this.userRepository.update(user, user.id);
            return;
        }
        if (existsEmail === null) {
            if (user.password !== undefined) {
                const passwordHash = await bcryptjs_1.default.hash(user.password, 8);
                user.password = passwordHash;
            }
            await this.userRepository.update(user, user.id);
            return;
        }
        if (existsEmail !== null)
            throw new Error("E-mail already exists");
    }
}
exports.UpdateUser = UpdateUser;
//# sourceMappingURL=UpdateUser.js.map
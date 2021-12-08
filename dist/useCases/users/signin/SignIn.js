"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignIn = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = require("jsonwebtoken");
class SignIn {
    signInRepository;
    constructor(signInRepository) {
        this.signInRepository = signInRepository;
    }
    async execute(user) {
        if (user.email === undefined || user.password === undefined) {
            throw new Error("Invalid credentials");
        }
        const existsUser = await this.signInRepository.existsEmail(user.email);
        if (existsUser === null) {
            throw new Error("User does not exist");
        }
        const { password_hash, email, id, name } = existsUser;
        const passwordHash = await bcryptjs_1.default.compare(user.password, password_hash);
        if (passwordHash) {
            const { email } = user;
            const id = existsUser.id;
            const token = (0, jsonwebtoken_1.sign)({ id, email }, process.env.TOKEN_SECRET, {
                expiresIn: process.env.TOKEN_EXPIRATION,
            });
            const userLogin = { token, email, id, name };
            return userLogin;
        }
        else {
            throw new Error("invalid password");
        }
    }
}
exports.SignIn = SignIn;
//# sourceMappingURL=SignIn.js.map
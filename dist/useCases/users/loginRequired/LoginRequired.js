"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRequired = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class LoginRequired {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(token) {
        const data = (0, jsonwebtoken_1.verify)(token, process.env.TOKEN_SECRET);
        const existsToken = await this.userRepository.existsUserToken(data.id, data.email);
        if (existsToken === null) {
            throw new Error("invalid token");
        }
        return data;
    }
}
exports.LoginRequired = LoginRequired;
//# sourceMappingURL=LoginRequired.js.map
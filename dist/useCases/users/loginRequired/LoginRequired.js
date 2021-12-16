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
        (0, jsonwebtoken_1.verify)(token, process.env.TOKEN_SECRET, (err) => {
            if (err instanceof jsonwebtoken_1.TokenExpiredError)
                throw new Error("expired token");
            if (err)
                throw new Error("invalid token");
        });
        const data = (0, jsonwebtoken_1.verify)(token, process.env.TOKEN_SECRET);
        const { id, email } = data;
        const existsUserToken = await this.userRepository.existsUserToken(id, email);
        if (existsUserToken === null) {
            throw new Error("login required");
        }
        return { id, email };
    }
}
exports.LoginRequired = LoginRequired;
//# sourceMappingURL=LoginRequired.js.map
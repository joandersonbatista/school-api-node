"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRequiredMiddleware = void 0;
class LoginRequiredMiddleware {
    loginRequired;
    constructor(loginRequired) {
        this.loginRequired = loginRequired;
    }
    async tokenRequired(req, res, next) {
        const { authorization } = req.headers;
        if (authorization === undefined) {
            return res.status(401).json({ message: "Login required" });
        }
        const [, token] = authorization.split(" ");
        try {
            const data = await this.loginRequired.execute(token);
            req.userEmail = data.email;
            req.userId = data.id;
            return next();
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(400).json({ message: error.message });
            return res.status(400).json({ message: "Unexpected error." });
        }
    }
}
exports.LoginRequiredMiddleware = LoginRequiredMiddleware;
//# sourceMappingURL=LoginRequiredMiddleware.js.map
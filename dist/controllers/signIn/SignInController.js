"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInController = void 0;
class SignInController {
    signIn;
    constructor(signIn) {
        this.signIn = signIn;
    }
    async token(req, res) {
        const user = req.body;
        try {
            const token = await this.signIn.execute(user);
            return res.status(200).send({ token });
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(400).json({ message: error.message });
            return res.status(400).json({ message: "Unexpected error." });
        }
    }
}
exports.SignInController = SignInController;
//# sourceMappingURL=SignInController.js.map
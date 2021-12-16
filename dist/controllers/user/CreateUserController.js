"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
class CreateUserController {
    createUser;
    constructor(createUser) {
        this.createUser = createUser;
    }
    async create(req, res) {
        const user = req.body;
        if (!user.email) {
            return res.status(400).json({
                message: "email is required",
            });
        }
        if (!user.name) {
            return res.status(400).json({
                message: "name is required",
            });
        }
        if (!user.password) {
            return res.status(400).json({
                message: "password is required",
            });
        }
        try {
            await this.createUser.execute(user);
            return res.status(201).send();
        }
        catch (err) {
            if (err instanceof Error)
                return res.status(400).json({ message: err.message });
            return res.status(400).json({ message: "Unexpected error." });
        }
    }
}
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=CreateUserController.js.map
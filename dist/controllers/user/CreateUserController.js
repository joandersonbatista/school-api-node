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
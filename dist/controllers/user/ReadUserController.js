"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadUserController = void 0;
class ReadUserController {
    readUser;
    constructor(readUser) {
        this.readUser = readUser;
    }
    async readOne(req, res) {
        const readUser = { id: req.userId };
        try {
            const user = await this.readUser.execute(readUser);
            return res.status(200).send(user);
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(400).json({ message: error.message });
            return res.status(400).json({ message: "Unexpected error." });
        }
    }
}
exports.ReadUserController = ReadUserController;
//# sourceMappingURL=ReadUserController.js.map
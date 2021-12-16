"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
class UpdateUserController {
    updateUser;
    constructor(updateUser) {
        this.updateUser = updateUser;
    }
    async update(req, res) {
        const updateAttributes = req.body;
        updateAttributes.id = req.userId;
        try {
            await this.updateUser.execute(updateAttributes);
            return res.status(200).send();
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(400).json({ message: error.message });
            return res.status(400).json({ message: "Unexpected error." });
        }
    }
}
exports.UpdateUserController = UpdateUserController;
//# sourceMappingURL=UpdateUserController.js.map
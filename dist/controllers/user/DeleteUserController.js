"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserController = void 0;
class DeleteUserController {
    deleteUser;
    constructor(deleteUser) {
        this.deleteUser = deleteUser;
    }
    async delete(req, res) {
        const deleteUser = { id: req.userId };
        try {
            await this.deleteUser.execute(deleteUser);
            return res.status(200).send();
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(400).json({ message: error.message });
            return res.status(400).json({ message: "Unexpected error." });
        }
    }
}
exports.DeleteUserController = DeleteUserController;
//# sourceMappingURL=DeleteUserController.js.map
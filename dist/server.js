"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
App_1.default.listen(3001, () => {
    console.log("-_-");
    console.log("http://localhost:3001");
});
//# sourceMappingURL=server.js.map
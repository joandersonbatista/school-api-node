"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerConfig = void 0;
const multer_1 = __importStar(require("multer"));
const path_1 = require("path");
const multerConfig = {
    dest: (0, path_1.resolve)(__dirname, "..", "..", "uploads"),
    storage: (0, multer_1.diskStorage)({
        destination: (req, file, cb) => {
            cb(null, (0, path_1.resolve)(__dirname, "..", "..", "uploads"));
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}${(0, path_1.extname)(file.originalname)}`);
        },
    }),
    fileFilter: (req, file, cb) => {
        const formats = ["image/jpg", "image/jpeg", "image/png"];
        if (!formats.includes(file.mimetype)) {
            return cb(new multer_1.default.MulterError("LIMIT_UNEXPECTED_FILE", "Image uploaded is not of type jpg/jpeg or png"));
        }
        return cb(null, true);
    },
};
exports.multerConfig = multerConfig;
//# sourceMappingURL=multer.js.map
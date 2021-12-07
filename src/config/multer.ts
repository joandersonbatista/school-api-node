import multer, { Options, diskStorage } from "multer";
import { extname, resolve } from "path";

const multerConfig = {
  dest: resolve(__dirname, "..", "..", "uploads"),
  storage: diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, "..", "..", "uploads"));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}${extname(file.originalname)}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    const formats = ["image/jpg", "image/jpeg", "image/png"];

    if (!formats.includes(file.mimetype)) {
      return cb(
        new multer.MulterError(
          "LIMIT_UNEXPECTED_FILE",
          "Image uploaded is not of type jpg/jpeg or png",
        ),
      );
    }

    return cb(null, true);
  },
} as Options;

export { multerConfig };

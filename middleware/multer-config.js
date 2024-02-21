const multer = require("multer");
const path = require("path");

const MIMES_TYPES = {
  "video/mp4": "mp4",
  "video/mpeg": "mpeg",
  "video/quicktime": "mov",
  "video/x-msvideo": "avi",
  "video/x-flv": "flv",
  "video/webm": "webm",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const uploadPath = path.join(__dirname, "public", "videos");
    callback(null, uploadPath);
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIMES_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage }).single("video");

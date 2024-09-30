const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinaryConfig");

// Set up Cloudinary storage with multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "pins", // Folder name in Cloudinary where images will be stored
    format: async (req, file) => "png", // File format
    publicid: (req, file) => file.originalname,
  },
});

const upload = multer({ storage: storage });

module.exports = upload;

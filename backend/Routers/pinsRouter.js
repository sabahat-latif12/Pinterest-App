const express = require("express");
const multer = require("multer");
const path = require("path");
const Pins = require("../Models/definitions/pins");
const {
  createPin,
  getAllPins,
  getPinById,
  updatePin,
  deletePin,
} = require("../Controllers/pinsController");
const isAuth = require("../utils/isAuth");

const router = express.Router();
//const distPath = path.join(__dirname, "../../Front-End/vite-project/public");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
});

const upload = multer({ storage: storage });

// Create a Pin
router.post("/post", upload.single("imageUrl"), isAuth, createPin);
router.get("/getall", getAllPins);
router.get("/:id", getPinById);
router.put("/:id", upload.single("imageUrl"), updatePin);
router.delete("/:id", deletePin);

// // router.post('/post', upload.single('imageUrl'), async (req, res) => {
// //   console.log("hello")
// //   try {
// //     const pin = await Pins.create({
// //       id:req.body.id,

// //       title: req.body.title,
// //       description: req.body.description,
// //       imageUrl: req.file.path, // Store the path to the uploaded image
// //     });
// //     res.status(201).json(pin);
// //   } catch (err) {
// //     res.status(500).json({ error: 'Failed to create pin', details: err });
// //   }
// // });

// // Get all Pins
// router.get("/getall", async (req, res) => {
//   try {
//     const pins = await Pins.findAll();
//     res.status(200).json(pins);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch pins" });
//   }
// });

// // Get a specific Pin
// router.get("/:id", async (req, res) => {
//   try {
//     const pin = await Pins.findByPk(req.params.id);
//     if (!pin) {
//       return res.status(404).json({ error: "Pin not found" });
//     }
//     res.status(200).json(pin);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch pin" });
//   }
// });

// // Update a Pin
// router.put("/:id", upload.single("image"), async (req, res) => {
//   try {
//     const pin = await Pins.findByPk(req.params.id);
//     if (!pin) {
//       return res.status(404).json({ error: "Pin not found" });
//     }

//     // Update fields
//     pin.title = req.body.title || pin.title;
//     pin.description = req.body.description || pin.description;
//     pin.imageUrl = req.file ? req.file.path : pin.imageUrl; // Update image if a new one is uploaded
//     await pin.save();

//     res.status(200).json(pin);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to update pin" });
//   }
// });

// // Delete a Pin (soft delete)
// router.delete("/:id", async (req, res) => {
//   try {
//     const pin = await Pins.findByPk(req.params.id);
//     if (!pin) {
//       return res.status(404).json({ error: "Pin not found" });
//     }
//     await pin.destroy(); // Soft delete
//     res.status(200).json({ message: "Pin deleted" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to delete pin" });
//   }
// });

module.exports = router;

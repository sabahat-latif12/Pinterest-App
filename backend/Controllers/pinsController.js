const pins = require("../Models/definitions/pins");
const Users = require("../Models/definitions/users");
const { v4: uuid } = require("uuid");

const { response } = require("express");
module.exports = {
  // Create a new pin
  createPin: async (req, res) => {
    try {
      console.log("req.body", req.body);
      console.log("req.user", req.user);

      const pin = await pins.create({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        imageUrl: `http://localhost:5000/uploads/${req.file.filename}`,
        // Store the path to the uploaded image
        userId: req.user.userId,
      });
      res.status(201).json(pin);
    } catch (err) {
      res.status(500).json({ error: "Failed to create pin", details: err });
    }
  },
  updatePin: async (req, res) => {
    try {
      const pin = await pins.findByPk(req.params.id);
      if (!pin) {
        return res.status(404).json({ error: "Pin not found" });
      }

      // Update fields
      pin.title = req.body.title || pin.title;
      pin.description = req.body.description || pin.description;
      pin.imageUrl = req.file ? req.file.path : pin.imageUrl; // Update image if a new one is uploaded
      await pin.save();

      res.status(200).json(pin);
    } catch (err) {
      res.status(500).json({ error: "Failed to update pin" });
    }
  },
  deletePin: async (req, res) => {
    try {
      const pin = await pins.findByPk(req.params.id);
      if (!pin) {
        return res.status(404).json({ error: "Pin not found" });
      }
      await pin.destroy(); // Soft delete
      res.status(200).json({ message: "Pin deleted" });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete pin" });
    }
  },
  getPinById: async (req, res) => {
    try {
      console.log("req", req.params);
      const pin = await pins.findByPk(req.params.pinid);
      if (!pin) {
        return res.status(404).json({ error: "Pin not found" });
      }
      res.status(200).json(pin);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch pin" });
    }
  },
  getAllPins: async (req, res) => {
    try {
      const allPins = await pins.findAll();
      console.log("pins", allPins);
      res.status(200).json(allPins);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
  // Fetch a pin by its ID
};

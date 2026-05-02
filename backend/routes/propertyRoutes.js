const express = require("express");
const router = express.Router();
const multer = require("multer");

const { storage } = require("../config/cloudinary");
const upload = multer({ storage });

const {
  createProperty,
  getProperties
} = require("../controllers/propertyController");

const auth = require("../middleware/authMiddleware");

// PUBLIC
router.get("/", getProperties);

// PROTECTED
router.post("/", auth, upload.single("image"), createProperty);
router.delete("/:id", auth, deleteProperty);
module.exports = router;
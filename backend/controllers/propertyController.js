const Property = require("../models/Property");

// CREATE PROPERTY
exports.createProperty = async (req, res) => {
  try {
    const property = await Property.create({
      title: req.body.title,
      price: req.body.price,
      location: req.body.location,
      description: req.body.description,
      image: req.file ? req.file.path : "",
      owner: req.user.id
    });

    res.json(property);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL
exports.getProperties = async (req, res) => {
  const properties = await Property.find().populate("owner", "name email");
  res.json(properties);
};

// DELETE PROPERTY
exports.deleteProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    // 🔒 OPTIONAL: only owner can delete
    if (property.owner.toString() !== req.user.id) {
      return res.status(403).json({ error: "Not authorized" });
    }

    await property.deleteOne();

    res.json({ message: "Property deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
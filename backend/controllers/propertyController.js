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
  const properties = await Property.find();
  res.json(properties);
};
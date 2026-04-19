const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(5000, () => console.log("Server running on port 5000"));

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const propertyRoutes = require("./routes/propertyRoutes");
app.use("/api/properties", propertyRoutes);
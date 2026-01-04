
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const sneakerRoutes = require("./routes/sneakerRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/sneakersdb")
  .then(() => console.log("Database connected successfully"))
  .catch(err => console.log("Database connection failed", err));

app.use("/api/sneakers", sneakerRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

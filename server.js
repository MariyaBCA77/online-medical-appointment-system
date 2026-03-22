const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/medicalDB")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api", require("./routes/userRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
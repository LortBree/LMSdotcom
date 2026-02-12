require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const materiRoute = require("./routes/materi");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// database 
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// routes
app.get("/", (req, res) => {
  res.send("Server running");
});

app.use("/api", materiRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

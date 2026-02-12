const mongoose = require("mongoose");

const MaterialSchema = new mongoose.Schema({
  id_course: {
    type: String,
    required: true,
  },
  nama_course: {
    type: String,
    required: true,
  },
  nama_instruktur: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Material", MaterialSchema);

const express = require("express");
const Materi = require("../model/Materi");

const router = express.Router();

// POST
router.post("/materi", async (req, res) => {
  try {
    const { id_course, nama_course, nama_instruktur, content } = req.body;

    const materi = new Materi({
      id_course,
      nama_course,
      nama_instruktur,
      content,
    });

    await materi.save();
    res.json({ message: "Materi added" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET
router.get("/materi", async (req, res) => {
  try {
    const data = await Materi.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET by id
router.get("/materi/:id", async (req, res) => {
  try {
    const data = await Materi.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

const mongoose = require("mongoose");

const Quizz = mongoose.Schema({
  name: { type: String, required: true },
  chapitre_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chapter",
    required: true,
  },
});

module.exports = mongoose.model("Quizz", Quizz);

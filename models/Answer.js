const mongoose = require("mongoose");

const Answer = mongoose.Schema({
  name: { type: String, required: true },
  value: { type: String },
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  },
});

module.exports = mongoose.model("Answer", Answer);

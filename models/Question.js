const mongoose = require("mongoose");

const Question = mongoose.Schema({
  wording: { type: String, required: true },
  created_At: { type: Date, default: Date.now },
  updated_At: { type: Date },
  delete_At: { type: Date },
  questionType_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "QuestionType",
  },
  quizz_id: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
});

module.exports = mongoose.model("Question", Question);

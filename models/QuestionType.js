const mongoose = require("mongoose");

const QuestionType = mongoose.Schema({
  name: { type: String, required: true },
  created_At: { type: Date, default: Date.now },
  updated_At: { type: Date },
  delete_At: { type: Date },
});

module.exports = mongoose.model("QuestionType", QuestionType);

const mongoose = require("mongoose");

const ChapterTypeSchema = mongoose.Schema({
  name: { type: String, required: true },
  created_At: { type: Date, default: Date.now },
  updated_At: { type: Date },
  delete_At: { type: Date }
});

module.exports = mongoose.model("ChapterType", ChapterTypeSchema);

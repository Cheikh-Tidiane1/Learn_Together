const mongoose = require("mongoose");

const ChapterSchema = mongoose.Schema({
  name: { type: String, required: true },
  order: { type: String, required: true },
  videoUrl: { type: String },
  created_At: { type: Date, default: Date.now },
  updated_At: { type: Date },
  delete_At: { type: Date },
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  chapter_type_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ChapterType"
  }
});


module.exports = mongoose.model("Chapter", ChapterSchema);

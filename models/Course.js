const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  code: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  created_At: { type: Date, default: Date.now },
  updated_At: { type: Date},
  delete_At: { type: Date}
});

module.exports = mongoose.model('Course',courseSchema);

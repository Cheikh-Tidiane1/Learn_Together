const mongoose = require('mongoose');

const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_At: { type: Date, default: Date.now },
  updated_At: { type: Date },
  delete_At: { type: Date },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);

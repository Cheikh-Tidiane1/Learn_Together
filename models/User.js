const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema(
{
    name: { type: String},
    email: { type: String, required: true , unique: true },
    password: { type: String, required: true },
    date_creation: Date,
    date_update: Date,
    date_delete: Date
})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User',userSchema);
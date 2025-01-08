const { text } = require('body-parser');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 name:{
    type: String,
    required: true,
 },
 email:{
    type: String,
    required: true,
 },
 password:{
    type: String,
    required: true,
 },
timestamps: true,

});

model.exports = mongoose.model('User', userSchema);
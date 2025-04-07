const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { first: String, middle: String, last: String },
  grade: String,
  section: String,
  stream: String,
  age: Number,
  sex: String,
  subjects: [
    {
      name: String,
      scores: [Number] // 15%, 15%, 30%, 40%, 100%
    }
  ],
  average: Number,
  rank: Number
});

module.exports = mongoose.model('Student', studentSchema);

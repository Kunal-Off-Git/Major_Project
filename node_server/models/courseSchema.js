const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const secretKey = process.env.JWT_KEY;
const courseSchema = new Schema({
  course_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videos: [],
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;

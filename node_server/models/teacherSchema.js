const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const secretKey = process.env.JWT_KEY;
const teacherSchema = new Schema({
  teacher_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  uploaded_courses: [],
});

teacherSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

//generate token
teacherSchema.methods.generateToken = async function () {
  try {
    const generatedToken = jwt.sign({ _id: this._id }, secretKey);
    this.tokens = this.tokens.concat({ token: generatedToken });
    await this.save();
    return generatedToken;
  } catch (error) {
    console.log(error);
  }
};

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;

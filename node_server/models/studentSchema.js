const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const secretKey = process.env.JWT_KEY;
const studentSchema = new Schema({
  student_name: {
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
  enrolled_courses: [],
});

studentSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

//generate token
studentSchema.methods.generateToken = async function () {
  try {
    const generatedToken = jwt.sign({ _id: this._id }, secretKey);
    this.tokens = this.tokens.concat({ token: generatedToken });
    await this.save();
    return generatedToken;
  } catch (error) {
    console.log(error);
  }
};

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

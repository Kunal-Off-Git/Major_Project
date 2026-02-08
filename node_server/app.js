const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // For password hashing
const UserModel = require("./models/User");

const app = express();
const PORT = 5000;

// Use environment variable if available
const dbUrl = "mongodb://localhost:27017/User";

mongoose
  .connect(dbUrl, { useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// mongoose.connect("mongodb://127.0.0.1:27017/User");

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("<h3>Port is Working :)</h3>");
});

app.get("/help", (req, res) => {
  res.send("<h1>What do you need?</h1>");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        // Compare password using bcrypt
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            return res.status(500).json("Error comparing password");
          }
          if (isMatch) {
            res.json("success");
          } else {
            res.json("The password is incorrect");
          }
        });
      } else {
        res.json("No record existed");
      }
    })
    .catch((err) => {
      console.error("Error during login:", err);
      res.status(500).json("Error occurred while logging in");
    });
});

app.post("/register", (req, res) => {
  console.log("Received registration request:", req.body);

  // Hash password before saving to DB
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Error hashing password:", err);
      return res.status(500).json({ error: "Failed to hash password" });
    }

    // Replace the password with hashed one
    const newUser = { ...req.body, password: hashedPassword };

    UserModel.create(newUser)
      .then((user) => {
        console.log("User created:", user);
        res.json(user);
      })
      .catch((err) => {
        console.error("Error creating user:", err);
        res.status(500).json({ error: "Failed to register user" });
      });
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

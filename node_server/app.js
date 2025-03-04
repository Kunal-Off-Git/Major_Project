const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/User");

const app = express();
const PORT = 5000;

// Use environment variable if available
const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/User";

// MongoDB Connection
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Database Connected");
});

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
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("the password is incorrect");
      }
    } else {
      res.json("no record existed");
    }
  });
});

app.post("/register", (req, res) => {
  console.log("Received registration request:", req.body);

  UserModel.create(req.body)
    .then((user) => {
      console.log("User created:", user);
      res.json(user);
    })
    .catch((err) => {
      console.error("Error creating user:", err);
      res.status(500).json({ error: "Failed to register user" });
    });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

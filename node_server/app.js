// app.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// const mongoose = require("mongoose");
// const port = 5000;
// const dbUrl = process.env.DB_URL;
// const localDB = "mongodb://127.0.0.1:27017/education";
// mongoose.connect(localDB);

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error"));
// db.once("open", () => {
//   console.log("Database Connected");
// });

// Middleware to parse JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
  //   res.json({ message: "Welcome to the Node.js backend!" });
});
app.get("/help", (req, res) => {
  res.send("<h1>what do you need?</h1>");
  //   res.json({ message: "Welcome to the Node.js backend!" });
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

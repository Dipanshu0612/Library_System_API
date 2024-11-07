const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./db/db.js");
const booksRoutes = require("./routes/booksRoutes");

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use('/books', booksRoutes);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bookstore!" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Invalid Route!" });
});

const express = require("express");
const cors = require("cors");
const students = require("./students");

const app = express();
const PORT = 3000;

// Enable CORS so the frontend can fetch data from this server
app.use(cors());

// GET /student - Returns all students' info as JSON
app.get("/student", (req, res) => {
  res.json(students);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

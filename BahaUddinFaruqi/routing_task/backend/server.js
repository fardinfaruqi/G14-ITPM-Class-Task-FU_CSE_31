const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Enable CORS so the frontend can fetch data from this server
app.use(cors());

// GET /student - Returns student info as JSON
app.get("/student", (req, res) => {
  const student = {
    name: "Kazi Md. Baha Uddin Faruqi",
    id: "232031035",
    batch: "31st",
    program: "BSc in CSE",
    department: "Computer Science & Engineering",
    university: "Feni University",
    semester: "6th",
    email: "232031035@feniuniversity.ac.bd",
    cgpa: 3.55,
  };

  res.json(student);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Enable CORS so the frontend can fetch data from this server
app.use(cors());

// GET /student - Returns student info as JSON
app.get("/student", (req, res) => {
  const student = {
    name: "Fardin Faruqi",
    id: "CSE-31-001",
    department: "Computer Science & Engineering",
    university: "Your University",
    semester: "8th",
    email: "fardin@example.com",
    cgpa: 3.75,
  };

  res.json(student);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

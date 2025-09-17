const express = require("express");
const mysql = require("mysql2");
const path = require("path");

const app = express();
const PORT = 3000;
console.log("server is running");
// built-in body parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static files from project folder
app.use(express.static(path.join(__dirname)));

// MySQL connection/*
/*const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Veda88@om",   // your password
  database: "portfolio_db1"
});

db.connect(err => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL database!");
  }
});
*/

// logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// POST handler for form
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).send("All fields required");

  const sql = "INSERT INTO contact (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("DB insert error:", err);
      return res.status(500).send("Database error");
    }
    // ✅ redirect to thank.html on success
    return res.redirect("/thank.html");
  });
});

// fallback: serve index.html
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

// health check
app.get("/healthz", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

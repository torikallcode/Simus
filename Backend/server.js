const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 3000;

// Konfigurasi koneksi MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "weight_data",
});

// Connect ke database MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/insert", (req, res) => {
  let weight = req.body.weight;

  if (weight < 0) {
    weight = 0;
  }

  let sql = "INSERT INTO weights (weight) VALUES (?)";
  db.query(sql, [weight], (err, result) => {
    if (err) throw err;
    console.log("Data inserted");
    res.send("Data inserted");
  });
});

app.get("/data", (req, res) => {
  let sql = "SELECT * FROM weights ORDER BY timestamp DESC";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

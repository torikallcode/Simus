const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Menambahkan middleware CORS

// Konfigurasi koneksi ke database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Ganti dengan username database MySQL Anda
  password: '', // Ganti dengan password database MySQL Anda
  database: 'tetes_air'
});

// Menghubungkan ke database
db.connect((err) => {
  if (err) {
    console.error('Koneksi ke database gagal:', err);
  } else {
    console.log('Terhubung ke database MySQL');
  }
});

// Endpoint untuk mendapatkan data dari tabel kelembaban
app.get('/kelembaban', (req, res) => {
  const sql = 'SELECT * FROM kelembaban';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('Data yang diambil:', results); // Log data yang diambil
      res.json(results);
    }
  });
});

// Menjalankan server pada port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

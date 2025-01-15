const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 8080;

// MySQL database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'mydatabase',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

app.get('/db', (req, res) => {
  db.query('SELECT * FROM users', (err, rows) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(rows);
  });
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello!' });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

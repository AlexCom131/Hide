const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res) => {
  db.all("SELECT id, title, author, authorAvatar, date, content FROM blogs", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ blogs: rows });
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.get("SELECT * FROM blogs WHERE id = ?", [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ blog: row });
  });
});

module.exports = router;



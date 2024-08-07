const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const blogsRouter = require('./routes/blogs');

const dbPath = path.resolve(__dirname, 'blogDatabase.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    console.log('Connected to database');
  }
});

const app = express();
app.use('/api/blogs', blogsRouter(db)); 

app.use(express.static('public'));

app.get('/blogContent.html', (req, res) => {
  res.sendFile(__dirname + '/public/blogContent.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



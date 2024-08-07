const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, 'blogDatabase.db'); 

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error('Could not connect to database', err);
    } else {
      console.log('Connected to database');
    }
    });
db.serialize(() => {
  db.run(`CREATE TABLE blogs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    imagion TEXT,
    author TEXT,
    authorAvatar TEXT,
    date TEXT,
    content TEXT
  )`);

  const stmt = db.prepare("INSERT INTO blogs (title, imagion, author, authorAvatar, date, content) VALUES (?,?, ?, ?, ?, ?)");
  stmt.run("Blog Title 1", "/img/pictur/Blog Image.png", "Oliver Bennett1", "/img/review/Ellipse 22.png", "18 Jan 2022", "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog");
  stmt.run("Blog Title 2", "/img/pictur/Blog Image.png", "Щдуп Bennett2", "/img/review/Ellipse 22.png", "18 Jan 2022", "Another Dummy Text For Blog Heading");
  stmt.run("Blog Title 3", "/img/pictur/Group 48095419.png", "Oliver іваів3", "/img/review/Ellipse 22.png", "18 Jan 2022", "Yet Another Dummy Text For Blog Heading");
  stmt.run("Blog Title 4", "/img/pictur/Blog Image1.png", "Oliver іваів4", "/img/review/Ellipse 22.png", "18 Jan 2022", "Yet Another Dummy Text For Blog Heading");
  stmt.run("Blog Title 5", "/img/pictur/Image.png", "Bogdan іваів5", "/img/review/Ellipse 22.png", "18 Jan 2022", "Yet Another Dummy Text For Blog Heading");
  stmt.run("Blog Title 6", "/img/pictur/Group 48095419.png", "Bogdan іваів6", "/img/review/Ellipse 22.png", "18 Jan 2022", "Yet Another Dummy Text For Blog Heading");


  stmt.finalize(() => {
    console.log("Initial data has been inserted into the database");
    db.close((err) => {
      if (err) {
        console.error('Could not close the database connection', err);
      } else {
        console.log('Database connection closed');
      }
    });
  });
});

module.exports = db;


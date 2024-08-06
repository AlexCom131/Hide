const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:'); // Використовуємо в пам'яті для простоти, можна змінити на файл

db.serialize(() => {
  db.run(`CREATE TABLE blogs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    author TEXT,
    authorAvatar TEXT,
    date TEXT,
    content TEXT
  )`);

  // Додавання тестових даних
  const stmt = db.prepare("INSERT INTO blogs (title, author, authorAvatar, date, content) VALUES (?, ?, ?, ?, ?)");
  stmt.run("Blog Title 1", "Oliver Bennett1", "/path/to/avatar1.jpg", "18 Jan 2022", "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog");
  stmt.run("Blog Title 2", "Щдуп Bennett2", "/path/to/avatar2.jpg", "18 Jan 2022", "Another Dummy Text For Blog Heading");
  stmt.run("Blog Title 3", "Oliver іваів3", "/path/to/avatar3.jpg", "18 Jan 2022", "Yet Another Dummy Text For Blog Heading");
  stmt.run("Blog Title 4", "Oliver іваів4", "/path/to/avatar3.jpg", "18 Jan 2022", "Yet Another Dummy Text For Blog Heading");
  stmt.run("Blog Title 5", "Bogdan іваів5", "/path/to/avatar3.jpg", "18 Jan 2022", "Yet Another Dummy Text For Blog Heading");

  stmt.finalize();
});

module.exports = db;


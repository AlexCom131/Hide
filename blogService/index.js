const express = require('express');
const app = express();
const blogsRouter = require('./routes/blogs');

app.use('/api/blogs', blogsRouter);

app.use(express.static('public'));

app.get('/blogContent.html', (req, res) => {
  res.sendFile(__dirname + '/public/blogContent.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


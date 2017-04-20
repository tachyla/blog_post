const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { BlogPosts } = require('./models');

const jsonParser = bodyParser.json();
const app = express();

app.use(morgan('common'));

app.get('/blog-posts', (req, res) => {
    res.json(BlogPosts.get());
});

app.post('/blog-posts', (req, res) => {
    res.json(BlogPosts.create('First Blog Post', 'Today I walked my dog', 'TK', Date.now ));
});

app.delete('/blog-posts/:id', (req, res) => {
  res.json(BlogPosts.delete(1));
});
 app.put ('/blog-posts/:id', (req, res) => {
   res.json(BlogPosts.update(1));
 });

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});
.then (()=> console.log('Connection has been established'))
.catch(err => console.log('Something went wrong when connecting to the database', err);)
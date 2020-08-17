const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});
.then (()=> console.log(object);)
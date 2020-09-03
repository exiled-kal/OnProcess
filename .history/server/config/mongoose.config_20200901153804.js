const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/photodb', {
    useNewUrlParser: false,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => console.log('Connection has been established!'))
  .catch((err) =>
    console.log('Something went wrong when connnecting to the database', err)
  );

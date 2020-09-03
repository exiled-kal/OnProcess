const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/photodb', {
    useNewUrlParser: true,
    useUnifiedTopology: false,
    useFindAndModify: false,
  })
  .then(() => console.log('Connection has been established!'))
  .catch((err) =>
    console.log('Something went wrong when connnecting to the database', err)
  );

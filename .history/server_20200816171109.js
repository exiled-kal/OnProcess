const express = require('express');
const cors = require('cors');
const app = express();
require = ('./server/config/mongoose.config.js');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./server/routes/photo.routes')(app);
app.listen(8000, () => {
  console.log('Listening on port 8000');
});

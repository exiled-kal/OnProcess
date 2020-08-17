const express = require('exoress');
const cors = require('cors');
const app = express();
require = ('./server/config/mongoose.config.js')
app.use(cors())
app.use(express.json())

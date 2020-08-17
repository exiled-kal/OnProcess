const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/photodb', {
    useNewUrlParser: true,
    useUnifiedTopology
    useFindAndModify: true
})
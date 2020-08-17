const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/photodb', {
    useNewUrlParser: true,
    use
    useFindAndModify: true
})
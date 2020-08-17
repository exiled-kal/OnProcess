const photoClt = require('../controllers/photo.controller')

module.exports = function(app) {
    app.get('/api', ph)
}
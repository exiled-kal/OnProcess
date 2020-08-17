const photoCtl = require('../controllers/photo.controller');

module.exports = function (app) {
  app.get('/api', photoCtl.index);
  app.post('/api/photo',)
};

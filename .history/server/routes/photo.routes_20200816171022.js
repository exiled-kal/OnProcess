const photoCt = require('../controllers/photo.controller');

module.exports = function (app) {
  app.get('/api', photoCtl.index);
};

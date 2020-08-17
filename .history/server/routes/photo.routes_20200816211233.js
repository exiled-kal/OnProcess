const photoCtl = require('../controllers/photo.controller');

module.exports = function (app) {
  app.get('/api', photoCtl.index);
  app.post('/api/photos', photoCtl.createPhoto);
  app.get('/api/photos', photoCtl.getAllPhotos);
  app.get('/api/photos/:id', photoCtl.getPhoto);
  app.put('/api/photos/:id', photoCtl.updatePhoto);
  app.delele('/api/photos/:id', photoCtl.deletePhoto)
};

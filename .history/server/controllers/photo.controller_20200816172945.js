const Photo = require('../models/photo.model');

module.exports.index = (req, res) => {
  res.json({
    message: 'Welcome to my photo album',
  });
};

module.exports.createPhoto = (req, res) => {
  const {image, location, description} = req.body;
  Photo.create({
    image,
    location,
    description,
  })
    .then((photo) => res.json(photo))
    .catch((err) => res.status(400).json(err));
};

module.exports.getAllPhotos = (req, res) => {
  Photo.find()
    .then((photos) => res.json(photos))
    .catch((err) => res.json(err));
};

module.exports.getPhoto = (req, res) => {
  Photo.findOne({_id: res.params.id})
    .then((phot) => res.json(photo))
    .catch((err) => res.json(err));
};

module.exports.updatePhoto = (req, res) =. {
    Photo,.findOneandUpdate({_id: req.params.id})
}
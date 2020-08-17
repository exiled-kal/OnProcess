const Photo = require('../models/photo.model');

module.exports.index = (req, res) => {
  res.json({
    message: 'Welcome to my photo album',
  });
};

module.exports.createPhoto = (req, res) => {
    const { image, location, description} = req.body;
    Photo.create({
        image, location, description
    })
    .then(author => res.json(photo))
    .catch(err => res.status(400).json(err))
}

const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, 'Please provide an image']
    },
    location: {
      type: String,
      required: [true, 'Please provide with a location'],
      minlength: [
        2,
        'Please provide the name of the location  that is atleast 2 characters'
      ]
    },
    description: {
      type: String,
      required: [true, 'Please provide a description of the image.'],
      minlength: [
        5,
        'Please provide a description that is at least 5 characters'
      ]
    }
  },
  {
    timestamps: true
  }
);
const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;
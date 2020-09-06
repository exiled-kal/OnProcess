import React, {useState, useEffect} from 'react';
import './ImageCard.css';
import axios from 'axios';

function ImageCard({image, location, description}) {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/photos/' + photo._id)
      .then((response) => setPhoto(response.data));
  }, [photo._id]);
  return (
    <div className="imageCard">
      <h1>This is ImageCard</h1>
      <h1>{photo.img}</h1>
    </div>
  );
}

export default ImageCard;

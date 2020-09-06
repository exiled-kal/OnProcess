import React, {useState, useEffect} from 'react';
import './ImageCard.css';
import axios from 'axios';

function ImageCard({id, image, location, description}) {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/photos/' + id)
      .then((response) => setPhoto(response.data));
  }, [id]);

  return (
    <div className="imageCard">
      <div 
      key={id} className="imageCard__container">
        <h1>This is ImageCard</h1>
        <h1>{photo.image}</h1>
        <h2>{photo.location}</h2>
        <h2>{photo.description}</h2>
      </div>
    </div>
  );
}

export default ImageCard;

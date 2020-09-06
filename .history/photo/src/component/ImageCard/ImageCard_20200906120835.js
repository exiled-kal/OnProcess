import React, {useState, useEffect} from 'react';
import './ImageCard.css';
import axios from 'axios';

function ImageCard({id}) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/photos/' + id)
      .then((response) => setPhotos(response.data));
  }, [id]);

  return (
    <div className="imageCard">
      <div key={id} className="imageCard__container">
        <h1>This is ImageCard</h1>
        <h1>{photos.image}</h1>
        <h2>{photos.location}</h2>
        <h2>{photo.description}</h2>
      </div>
    </div>
  );
}

export default ImageCard;

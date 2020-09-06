import React, {useState, useEffect} from 'react';
import './ImageCard.css';
import axios from 'axios';

function ImageCard(props) {
  const [photos, setPhotos] = useState();

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/photos/' + props.id)
      .then((response) => setPhotos(response.data));
  }, [props.id]);

  return (
    <div className="imageCard">
      <div className="imageCard__container">
        <h1>This is ImageCard</h1>
        <h1>{photos.image}</h1>
        <h2>{photos.location}</h2>
        <h2>{photos.description}</h2>
      </div>
    </div>
  );
}

export default ImageCard;

import React, {useState, useEffect} from 'react';
import './ImageCard.css';
import axios from 'axios';

function ImageCard({id}) {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/photos/' + id)
      .then((response) => setPhoto(response.data));
  }, []);

  return (
    <div className="imageCard">
      <div key={photo.id} className="imageCard__container">
        <h1>This is ImageCard</h1>
        <h1>{photo.image}</h1>
      </div>
    </div>
  );
}

export default ImageCard;

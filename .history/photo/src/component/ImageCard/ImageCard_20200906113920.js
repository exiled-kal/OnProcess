import React, {useState, useEffect} from 'react';
import './ImageCard.css';
import axios from 'axios';

function ImageCard({photoimg, title, description}) {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/photos/' + )
      .then((response) => setPhoto(response.data));
  }, [id]);
  return (
    <div className="imageCard">
      <h1>This is ImageCard</h1>
      <h1>{photo.title}</h1>
    </div>
  );
}

export default ImageCard;

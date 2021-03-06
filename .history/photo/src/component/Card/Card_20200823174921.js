import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Card.css';

function Card({photo}) {
  const [photos, setPhotos] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/photos')
      .then((response) => setPhotos(response.data))
      .catch(() => setHasError(true));
  }, []);

  if (hasError) return 'Something went wrong..';

  if (photos === null) return 'Loading.....';

  return 
  <div className="img-grid">{photos && photos.map((photo) => {
    <div className="img-wrap"
    key={photo.id}>

    </div>
  })}</div>;
}

export default Card;

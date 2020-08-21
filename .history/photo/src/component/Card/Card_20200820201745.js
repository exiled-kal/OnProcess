import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Card() {
  const [photos, setPhotos] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/photos')
      .then((response) => setPhotos(response.json))
      .catch(() => setHasError(true));
  }, []);

  if (hasError) return 'Something went wrong..';

  if (photos === null) return 'Loading.....';

  return (
    <div className="card__container">
      <h2>Card</h2>
      {photos.map}
      <h3>{photo.image}</h3>
    </div>
  );
}

export default Card;

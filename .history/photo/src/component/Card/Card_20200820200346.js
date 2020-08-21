import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function Card() {
  const [photos, setPhotos] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/photos')
      .then((response) => setPhotos(response.json))
      .catch(() => setHasError(true));
  }, []);

  if(hasError) return 'Something went wrong..'

  if(photos == )

  return (
    <div className="card__container">
      <h2>Card</h2>
    </div>
  );
}

export default Card;

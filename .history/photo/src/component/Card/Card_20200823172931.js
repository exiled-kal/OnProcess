import React, {useState, useEffect} from 'react';
import axios from 'axios';

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

  return (
    <div className="card__container">
      <h2>Card</h2>
      { photos.map(photo => {
        <td>
          {photo.image}
        </td>
      })}
    </div>
  );
}

export default Card;

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

  return (
    <div className="card__container">
     
      {photos.map((photo) => (
        <tr key={photo.id}>
          <td>{photo.image}</td>
          <td>{photo.location}</td>
          <td>{photo.description}</td>
        </tr>
      ))}
    </div>
  );
}

export default Card;

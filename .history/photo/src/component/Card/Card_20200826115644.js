import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Card.css';
import {navigate} from '@reach/router';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
    <div className="img__header">
      Welcome to my Photography world
      <div className="img-grid">
        {photos.map((photo) => (
          <div
            className="img--wrap"
            key={photo.id}
            layout
            whileHover={{opacity: 1}}
            s
          >
            <img src={photo.image} alt="" />
            <h2>
              <p className="img__location">
                <LocationOnIcon />
                {photo.location}
              </p>
            </h2>
            <p className="img__description">{photo.description}</p>
          </div>
        ))}
        <button
          className="collapse"
          type="button"
          onClick={() => navigate('./home')}
        >
          Collapse
        </button>
      </div>
    </div>
  );
}

export default Card;

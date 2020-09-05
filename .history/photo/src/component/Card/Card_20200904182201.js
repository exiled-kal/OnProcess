import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Card.css';
import {navigate} from '@reach/router';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

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
      <h2>Welcome to my Photography world</h2>
      <h4>
        Photography plays a vital role in so many ways to different ways
        depending on how you want to see and describe it. For some people,
        photography is like meditation. For some people, photography is like
        soul searching. For some people, photography is like profession.
      </h4>
      <div className="img-grid">
        {photos.map((photo) => (
          <div
            className="img__wrap"
            key={photo._id}
            // layout
            // whileHover={{opacity: 1}}
            // s
          >
            <img src={photo.image} alt="" />
            <h2>
              <p className="img__location">
                <LocationOnIcon />

                {photo.location}
              </p>
            </h2>
            <p className="img__description">{photo.description}</p>
            <div className="img__icon">
              <ThumbUpAltIcon on />
            </div>
          </div>
        ))}
        <div className="collapse__container">
          <button
            className="collapse"
            type="button"
            onClick={() => navigate('./home')}
          >
            Collapse
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

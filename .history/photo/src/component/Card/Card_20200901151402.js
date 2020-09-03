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
      <h2>Welcome to my Photography world</h2>
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
                <a href="https://www.google.com/maps/place/Union+Square/@37.7864841,-122.4087354,16.94z/data=!4m19!1m13!4m12!1m4!2m2!1d-122.3032832!2d37.9092992!4e1!1m6!1m2!1s0x808580892df7905b:0xe36cf5789882dd6f!2sunion+square!2m2!1d-122.4075139!2d37.7879358!3m4!1s0x808580892df7905b:0xe36cf5789882dd6f!8m2!3d37.7879358!4d-122.4075139">
                  <LocationOnIcon />
                </a>
                {photo.location}
              </p>
            </h2>
            <p className="img__description">{photo.description}</p>
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

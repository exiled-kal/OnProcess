import React, {useState, useEffect} from 'react';
import './ImageCard.css';
import axios from 'axios';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {navigate} from '@reach/router';

function ImageCard({id}) {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/photos/' + id)
      .then((response) => setPhoto(response.data));
  }, [id]);

  return (
    <div className="imageCard">
      <div key={id} className="imageCard__container">
        <div className="imageCard__photo">
          <img src={photo.image} alt="" />
        </div>
        <div className="imageCard__text">
          <h2>
            <LocationOnIcon />
            {photo.location}
          </h2>
          <h2>{photo.description}</h2>
        </div>
      </div>
      <div className="collapse__container">
        <button
          className="collapse"
          type="button"
          onClick={() => navigate('/photos')}
        >
          Collapse
        </button>
      </div>
    </div>
  );
}

export default ImageCard;

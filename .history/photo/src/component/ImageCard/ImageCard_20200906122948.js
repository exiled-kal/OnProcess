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
  }, [props.id]);

  return (
    <div className="imageCard">
      <div className="imageCard__container">
        <img src={photo.image} alt="" />
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

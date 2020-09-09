import React, {useState, useEffect} from 'react';
import './ImageCard.css';
import axios from 'axios';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {navigate} from '@reach/router';
// import AdSense from 'react-adsense';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ModeCommentIcon from '@material-ui/icons/ModeComment';

function ImageCard({id, like}) {
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
            {''}.
          </h2>
          <h4 className="imagCard__description">{photo.description}</h4>
        </div>
      </div>
      <div className="imageCard__icons">
        <div className="imageCard__icon">
          <ThumbUpAltIcon
          // onChange={handleSubmit}
          />
        </div>
        <div className="imageCard__icon">
          <ModeCommentIcon
          // onChange={handleSubmit}
          />
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

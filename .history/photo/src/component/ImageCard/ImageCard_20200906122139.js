import React, {useState, useEffect} from 'react';
import './ImageCard.css';
import axios from 'axios';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function ImageCard(props) {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/photos/' + props.id)
      .then((response) => setPhoto(response.data));
  }, [props.id]);

  return (
    <div className="imageCard">
      <div className="imageCard__container">
        <h1>This is ImageCard</h1>
        <h1>{photo.image}</h1>
        <h2>
          <LocationOnIcon />
          {photo.location}
        </h2>
        <h2>{photo.description}</h2>
      </div>
    </div>
  );
}

export default ImageCard;

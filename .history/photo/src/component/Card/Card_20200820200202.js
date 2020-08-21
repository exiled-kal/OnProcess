import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function Card() {
  const [photos, setPhotos] = useState(null);
  const [hasError, setHasError] = useState(false);


  useEffect(()=> {
    axios.get('http:')
  })



  return (
    <div className="card__container">
      <h2>Card</h2>
    </div>
  );
}

export default Card;

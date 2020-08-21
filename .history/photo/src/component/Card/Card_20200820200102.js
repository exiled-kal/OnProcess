import React, {useState} from 'react';

function Card() {
  const [photos, setPhotos] = useState(null)
  return (
    <div className="card__container">
      <h2>Card</h2>
    </div>
  );
}

export default Card;

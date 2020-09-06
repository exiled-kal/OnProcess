import React from 'react';
import './ImageCard.css';

function ImageCard({title}) {
  return (
    <div className="imageCard">
      <h1>This is ImageCard</h1>
      <h1>{title}</h1>
    </div>
  );
}

export default ImageCard;

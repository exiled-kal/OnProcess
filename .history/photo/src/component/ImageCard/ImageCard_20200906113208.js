import React, {useState} from 'react';
import './ImageCard.css';

function ImageCard({img, title, description}) {
  const [photo, setPhoto] = useState(null);


  useEffect(()=> {
      axios.get('http://localhost:8000/api/photos/' + )
  })
  return (
    <div className="imageCard">
      <h1>This is ImageCard</h1>
      <h1>{title}</h1>
    </div>
  );
}

export default ImageCard;

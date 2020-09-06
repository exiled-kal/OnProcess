import React, {useState} from 'react';
import './ImageCard.css';
import Axios from 'axios';

function ImageCard({img, title, description}) {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    Axios
      .get('http://localhost:8000/api/photos/' + id)
      .then((response) => setPhoto(response.data));
  }, [id]);
  return (
    <div className="imageCard">
      <h1>This is ImageCard</h1>
      <h1>{title}</h1>
    </div>
  );
}

export default ImageCard;

import React, {useState} from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import './Like.css';

function Like() {
  const [n, setN] = useState(0);

  function increment(n) {
    return n + 1;
  }

  return (
    <div className="like">
      <ThumbUpAltIcon onClick={() => setN(increment)} />
      <span>{n}</span>
    </div>
  );
}

export default Like;

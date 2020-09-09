import React, {useState} from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

function increment(n) {
  return n + 1;
}
function Like() {
  const [n, setN] = useState(0);

  return (
    <div>
      
      <ThumbUpAltIcon onClick={() => setN(increment)} />
    </div>
  );
}

export default Like;

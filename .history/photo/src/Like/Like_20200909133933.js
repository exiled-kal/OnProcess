import React, {useState} from 'react';

function increment(n) {
  return n + 1;
}
function Like() {
  const [n, setN] = useState(0);

  return (
    <div>
      <span>{n}</span>
      <button onClick={() => setN(increment)}></button>
    </div>
  );
}

export default Like;

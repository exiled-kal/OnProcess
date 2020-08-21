import React from 'react';

function MyInfo() {
  return (
    <div className="info__container">
      <h2>About me:</h2>
      <img
        className="avatar"
        src="https://pbs.twimg.com/profile_images/1864904997/383756_10150595707986414_636991413_10897349_1091730349_n.jpg"
        alt="avatar"
        style={{height: '200px'}}
      />
    </div>
  );
}

export default MyInfo;

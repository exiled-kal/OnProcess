import React from 'react';
import './MyInfo.css';

function MyInfo() {
  return (
    <div className="info__container">
      <h2>About me:</h2>
      <div className="photo__container">
        <img
          className="avatar__me"
          src="https://pbs.twimg.com/profile_images/1864904997/383756_10150595707986414_636991413_10897349_1091730349_n.jpg"
          alt="avatar"
        />
        <h2 style={{paddingTop: '2em'}}>Tsering Kalden</h2>
        <p>
          <h2 style={{color: 'blue'}}>A Passionate and Avid Photographer</h2>
        </p>
        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />

        <h3>
          <p className="about__container">
            Hello Everyone ! My name is Tsering Kalden. I am a Tibetan based in
            Bay Area, California. I have been leaving here in Bay Area for 4
            years now.
            <p>
              California has such wonderful and vast place to venture and endure
              and envy many beautiful and different landscape from lush green to
              snow-capped mountains to dry sandy place which holds one of the
              hottest place on earth. California is one of the most visited
              places in America both domestically and internationally.
            </p>
          </p>
        </h3>
      </div>
    </div>
  );
}

export default MyInfo;

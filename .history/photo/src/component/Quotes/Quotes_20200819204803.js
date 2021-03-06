import React from 'react';
import './Quotes.css';

function Quotes() {
  return (
    <div className="quotes__container">
      <div className="photo__quotes">
        <h4 className="quotes__line">
          "When words become unclear, I shall focus with photographs. When
          images become inadequate, I shall be content with silence."
        </h4>
        <span className="quotes__writer"> - Ansel Adams</span>
        <h4 className="quotesline">
          "When you photograph people in color, you photography their clothes.
          But when you photograph people in Black and white, you photograph
          their souls."
        </h4>
        <span className="quoteswriter"> - Ansel Adams</span>
        <h4 className="quotesline">
          "Skill in photography is acquired by practice and not by purchase"
        </h4>
        <span className="quoteswriter"> - Percy W. Harris</span>
        <h4 className="quotesline">
          "A lot of photographers think that if they buy a better camera they'll
          be able to take better photographs. A better camera won't do a thing
          for you if you don't have anything in your head or in your heart."
        </h4>
        <span className="quoteswriter"> - Percy W. Harris</span>
      </div>
      <div></div>
    </div>
  );
}

export default Quotes;

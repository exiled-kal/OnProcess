import React from 'react';
import './Quotes.css';

function Quotes() {
  return (
    <div className="quotes__container">
      <div className="photo__quotes">
        <span className="header__quotes">
          Here are some quotes from some famous photographer around the world:
        </span>
        <h4 className="quotes__line">
          "When words become unclear, I shall focus with photographs. When
          images become inadequate, I shall be content with silence."
        </h4>
        <span className="quotes__writer"> - Ansel Adams</span>
        <h4 className="quotes__line">
          "When you photograph people in color, you photography their clothes.
          But when you photograph people in Black and white, you photograph
          their souls."
        </h4>
        <span className="quotes__writer"> - Ansel Adams</span>
        <h4 className="quotes__line">
          "Skill in photography is acquired by practice and not by purchase"
        </h4>
        <span className="quotes__writer"> - Percy W. Harris</span>
        <h4 className="quotes__line">
          "A lot of photographers think that if they buy a better camera they'll
          be able to take better photographs. A better camera won't do a thing
          for you if you don't have anything in your head or in your heart."
        </h4>
        <span className="quotes__writer"> - Percy W. Harris</span>
        <h4 className="quotes__line">
          "One doesn't stop seeing. One doesn't stop framing. It doesn't turn
          off and turn on. Its on all the time."
        </h4>
        <span className="quotes__writer"> - Annie Leibovitz</span>
        <h4 className="quotes__line">
          "Look and think before opening the shutter. The heart and mind are the
          true lens of the camera."
        </h4>
        <span className="quotes__writer"> - Yousuf Karsh</span>
      </div>
    </div>
  );
}

export default Quotes;

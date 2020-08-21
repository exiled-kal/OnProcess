import React from 'react';
import './IconBar.css';

function IconBar() {
  return (
    <div className="social__link">
      <br />
      <p>Click on the Logo to check my Instagram page</p>
      <a href="https://www.instagram.com/exiled_fotos/">
        <InstagramIcon className="insta__link" />
      </a>
      <h3 className="like__follow">Like & Follow</h3>
      <CopyrightIcon className="copy__right" />
      All the pictures are taken by me.
    </div>
  );
}

export default IconBar;

import React from 'react';
import './IconBar.css';
import CopyrightIcon from '@material-ui/icons/Copyright';
import InstagramIcon from '@material-ui/icons/Instagram';

function IconBar() {
  return (
    <div className=>
      <div className="social__link">
        <br />
        <p>Click on the Logo to check my Instagram page</p>
        <a href="https://www.instagram.com/exiled_fotos/">
          <InstagramIcon className="instagram__link" />
        </a>
        <h3 className="like__follow">Like & Follow</h3>
        <CopyrightIcon className="copy__right" />
        All the pictures are taken by me.
      </div>
    </div>
  );
}

export default IconBar;

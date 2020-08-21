import React from 'react';
import './IconBar.css';
import CopyrightIcon from '@material-ui/icons/Copyright';
import InstagramIcon from '@material-ui/icons/Instagram';

function IconBar() {
  return (
    <div className="link__container">
      <div className="social__link">
        <br />
        <a href="https://www.instagram.com/exiled_fotos/">
          <InstagramIcon className="instagram__link" />
        </a>
        <h3 className="like__follow">Like & Follow</h3>
        <CopyrightIcon className="copy__right" />
        All the pictures are taken by me.
        <p style={{color: 'navyblue'}}>
          Click on the Lo<span>go to check</span> my Instagram page
        </p>
      </div>
    </div>
  );
}

export default IconBar;

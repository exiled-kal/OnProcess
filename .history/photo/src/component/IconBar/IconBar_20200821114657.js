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
        <div className="quotes__container">
          <CopyrightIcon className="copy__right" />
          <span style={{color: 'white'}}>
            All the pict<span style={{color: 'white'}}>ures</span> are taken by
            me.
          </span>
          <p style={{color: 'white'}}>
            Click on the{' '}
            <p style={{color: 'white'}}>logo to check my Instagram page</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default IconBar;

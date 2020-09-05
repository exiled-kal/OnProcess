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
          <div className="quotes__row">
            <CopyrightIcon className="copy__right" />
            <h4>
              <span style={{color: 'black'}}>
              <p>© 2020 Tsering ! No rights reserved - this is a demo!</p>
      <p>Privacy · Terms · Sitemap · Company Details</p>
              </span>
              <p style={{color: 'black'}}>
                Click on the logo to check my Instagram page!!!!
              </p>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconBar;

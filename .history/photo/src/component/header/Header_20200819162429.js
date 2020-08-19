import React from 'react';
import './Header.css';
import {Avatar} from '@material-ui/core';

function Header() {
  return (
    <div className="headerContainer">
      <img
        className="header__photo"
        src="https://firebasestorage.googleapis.com/v0/b/photogram-7b4af.appspot.com/o/WiC_lmtw.jpeg?alt=media&token=a0ee1eb6-3c5d-422d-808f-a3fafe12b4bd"
        alt="image"
      />
    </div>
  );
}

export default Header;

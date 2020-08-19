import React from 'react';
import './Header.css';
import {Avatar} from '@material-ui/core';

function Header() {
  return (
    <div className="headerContainer">
      <Avatar
        className
        src="https://pbs.twimg.com/profile_images/1864904997/383756_10150595707986414_636991413_10897349_1091730349_n.jpg"
        alt="avatar"
      />
    </div>
  );
}

export default Header;

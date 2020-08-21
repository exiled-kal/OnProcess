import React from 'react';
import {Router, Link, Redirect} from '@reach/router';
import './App.css';
import Header from './component/header/Header';
import Card from './component/Card/Card';
import MyInfo from './component/Info/MyInfo';
import Quotes from './component/Quotes/Quotes';
// import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import IconBar from './component/IconBar/IconBar';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <Link className="links" to="/photos">
          My Photos
        </Link>{' '}
        |{' '}
        <Link className="links" to="/myInfo">
          My Info
        </Link>
        <hr />
        <Router>
          <Card path="photos" />
          <MyInfo path="myInfo" />
          <Redirect from="/" to="/home" noThrow />
        </Router>
        
      </div>
      <IconBar />
    </div>
  );
}

export default App;

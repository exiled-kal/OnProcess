import React from 'react';
import {Router, Link, Redirect} from '@reach/router';
import './App.css';
import Header from './component/header/Header';
import Card from './component/Card/Card';
import MyInfo from './component/Info/MyInfo';
import Quotes from './component/Quotes/Quotes';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <div>
          <Link className="links" to="/photos">
            <PhotoAlbumIcon text="My Photos" />
            My 
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
          <Quotes />
        </div>
      </div>
    </div>
  );
}

export default App;

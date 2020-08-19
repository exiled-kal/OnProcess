import React from 'react';
import {Router, Link, Redirect} from '@reach/router';
import './App.css';
import Header from './component/header/Header';
import Card from './component/Card/Card';
import MyInfo from './component/Info/MyInfo';
import Quotes from './component/Quotes/Quotes';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header className="header__app"/>

        <div className="links">
          <Link to="/photoalbum">My Photos</Link> |{' '}
          <Link to="/myinfo">My Info</Link>
          <hr />
          <Router>
            <Card path="photoalbum" />
            <MyInfo path="myinfo" />
            <Redirect from="/" to="/home" noThrow />
          </Router>
          <Quotes />
        </div>
      </div>
    </div>
  );
}

export default App;

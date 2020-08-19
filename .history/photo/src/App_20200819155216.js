import React from 'react';

import {Router, Link, Redirect} from '@reach/router';
import './App.css';
import Header from './component/header/Header';
import Card from './component/Card/Card';
import MyInfo from './component/Info/MyInfo';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <Q
        <div>
          <Link to="/photoalbum">My Photos</Link> |{' '}
          <Link to="/myinfo">My Info</Link>
          <Router>
            <Card path="photoalbum" />
            <MyInfo path="myinfo" />
            <Redirect from="/" to="/home" noThrow />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
